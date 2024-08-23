import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Alert,
  Pressable,
} from 'react-native';
import Modal from 'react-native-modal';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import moment from 'moment';

import {colors, customLables, images, VectorIcon} from '../../comman';
import {
  BuyTicketsSvgComponent,
  CalenderIconSvgComponent,
  ClockIconSvgComponent,
  StadiumIconSvgComponent,
  ListenIconSvgComponent,
  WatchIconSvgComponent,
} from '../../utils';

import {styles} from './styles';

const ModalHomeBottomTeam = ({toggleModal, isModalVisible, teamDetails}) => {
  const openLink = async url => {
    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'done',
          preferredBarTintColor: colors.buttonPrimary,
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: colors.buttonPrimary,
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
      } else Linking.openURL(url);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const imageUrl1 = `https://roarlions.com${teamDetails?.opponent?.image?.path}/${teamDetails?.opponent?.image?.filename}`;
  const opponentOpponentTitle = teamDetails?.opponent?.title;
  const sportTitletName = teamDetails?.sport?.title;

  console.log('teamDetails'.teamDetails);

  const utcTime = teamDetails?.date;
  const localTime = moment.utc(utcTime).format('h:mmA');

  const onWatchHandler = () => {
    const url =
      'https://www.espn.com/watch/catalog/302bca11-b142-41e5-a456-9d2edcbbaae8/asun#bucketId=29461&sourceCollection=Browse_by_Conference';
    openLink(url);
  };

  const onBuyTicketsHandler = () => {
    const url = 'https://ds1.glitnirticketing.com/dsticket/web/ev_list.php';
    openLink(url);
  };

  const onListenHandler = () => {
    const url =
      'https://streamdb7web.securenetsystems.net/cirrusencore/index.cfm?stationCallSign=WLLX';
    openLink(url);
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => toggleModal(false, '')}>
            <VectorIcon
              type={'AntDesign'}
              color={colors.placeholderColor}
              name={'close'}
              size={Platform.isPad ? 40 : 20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainInnerContainer}>
          <View style={styles.teamsContainer}>
            <View style={styles.unaImageContaier}>
              <Image
                style={styles.imageIcon1}
                resizeMode="contain"
                source={images?.teamIcon1}
              />
              <Text style={styles.headingText3}>{'UNA'}</Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.at_vsContainer}>
              <Text style={styles.vsTextStyle}>{teamDetails?.at_vs}</Text>
            </View>
            <View style={styles.spacer2} />
            <View style={styles.opponentImageContaier}>
              <Image
                style={styles.imageIcon1}
                resizeMode="contain"
                source={{uri: imageUrl1}}
              />
              <View>
                <Text style={styles.headingText3}>
                  {opponentOpponentTitle ? opponentOpponentTitle : ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {sportTitletName ? sportTitletName : ''}
            </Text>
          </View>
          <View>
            <View style={styles.containerCard}>
              <CalenderIconSvgComponent />
              <View style={styles.spacer2} />
              <Text style={styles.textItemStyle}>
                {teamDetails?.mainTopEventDate
                  ? moment(teamDetails?.mainTopEventDate)
                      .local()
                      .format('M/D/YYYY')
                  : ''}
              </Text>
            </View>
            {teamDetails?.time !== '' && (
              <>
                <View style={styles.heightSpacer} />
                <View style={styles.containerCard}>
                  <ClockIconSvgComponent />
                  <View style={styles.spacer2} />
                  <Text style={styles.textItemStyle}>
                    {teamDetails?.date ? localTime : customLables.TBA}
                  </Text>
                </View>
              </>
            )}
            <View style={styles.heightSpacer} />
            <View style={styles.containerCard}>
              <StadiumIconSvgComponent />
              <View style={styles.spacer2} />
              <Text style={styles.textItemStyle}>
                {teamDetails?.facility?.title
                  ? teamDetails?.facility?.title
                  : 'No Venue'}
              </Text>
            </View>
          </View>
          <View style={styles.heightSpacer} />
          <View style={styles.container}>
            <Pressable onPress={onWatchHandler}>
              <View style={styles.modalButtons}>
                <WatchIconSvgComponent />
                <Text> Watch</Text>
              </View>
            </Pressable>
            {teamDetails?.at_vs !== 'at' && (
              <Pressable onPress={onBuyTicketsHandler}>
                <View style={styles.modalButtons}>
                  <BuyTicketsSvgComponent />
                  <Text> Buy Tickets</Text>
                </View>
              </Pressable>
            )}

            <Pressable onPress={onListenHandler}>
              <View style={styles.modalButtons}>
                <ListenIconSvgComponent />
                <Text> Listen</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.spacer3} />
          <View>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => toggleModal(false, '')}>
              <Text style={styles.buttonTextStyle}>{'Close'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalHomeBottomTeam;
