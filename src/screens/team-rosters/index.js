import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  FlatList,
  TouchableOpacity,
  Pressable,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';

import {colors} from '../../comman';
import {screenName} from '../../comman/constants';
import {
  BaseballRoster,
  SoftballRoster,
  BasketballRoster,
  CrossCountryRoster,
  GolfRoster,
  TennisRoster,
  FootballRoster,
  WBasketballRoster,
  BeachVolleyballRoster,
  WCrossCountryRoster,
  WGolfRoster,
  WTennisRoster,
  VolleyballRoster,
  WSoccerRoster,
  Teams,
  VectorIcon,
} from '../../comman';
import {RosterItemModal} from '../../components';
import {MainContainer} from '../../hoc';
import {styles} from './styles';
import BackIcon from '../../comman/images/backIcon.svg';
import {getAuthTokenDetails} from '../../utils';

const TeamRostersScreen = props => {
  const navigation = useNavigation();
  const [team, setTeam] = React.useState('Football');
  const [rosterDetails, setRosterDetails] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [token, setToken] = React.useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleRosterItemModal = _val => setModalVisible(!isModalVisible);

  const modalHandler = item => {
    setRosterDetails(item);
    setModalVisible(true);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goBack();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    getAuthToken();
    if (token) {
      // console.log(
      //   JSON.parse(
      //     Buffer.from(access_token.split('.')[1], 'base64').toString(),
      //   ),
      // );
    }
  }, [token]);

  const getAuthToken = () => {
    try {
      let token1 = getAuthTokenDetails().then(value => {
        setToken(value);
      });
    } catch (error) {
      return error;
    }
  };

  const getRoster = () => {
    if (team == 'Football') {
      return FootballRoster;
    } else if (team == "Men's Basketball") {
      return BasketballRoster;
    } else if (team == "Women's Basketball") {
      return WBasketballRoster;
    } else if (team == 'Baseball') {
      return BaseballRoster;
    } else if (team == 'Softball') {
      return SoftballRoster;
    } else if (team == "Men's Cross Country") {
      return CrossCountryRoster;
    } else if (team == "Women's Cross Country") {
      return WCrossCountryRoster;
    } else if (team == "Men's Golf") {
      return GolfRoster;
    } else if (team == "Women's Golf") {
      return WGolfRoster;
    } else if (team == "Men's Tennis") {
      return TennisRoster;
    } else if (team == "Women's Tennis") {
      return WTennisRoster;
    } else if (team == "Women's Beach Volleyball") {
      return BeachVolleyballRoster;
    } else if (team == "Women's Soccer") {
      return WSoccerRoster;
    } else if (team == "Women's Volleyball") {
      return VolleyballRoster;
    }
  };

  const renderRosterItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => modalHandler(item)}>
        <View style={styles.rosterMainContainer}>
          <Text style={styles.flx2}>
            {item?.number} {item?.name}
          </Text>
          <Text style={styles.flx1}>{item?.position}</Text>
          <Text style={styles.flx1}>{item?.year}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onPressNavigateLogin = () => navigation.navigate(screenName.home);

  return (
    <MainContainer>
      <Pressable
        style={styles.closeButtonContainer}
        onPress={onPressNavigateLogin}>
        <BackIcon width={60} height={50} />
      </Pressable>
      <ModalDropdown
        options={Teams?.map((item, i) => item?.name || '')}
        saveScrollPosition={false}
        style={styles.mainModalContainer}
        textStyle={styles.modalDropDownTextStyle}
        dropdownStyle={styles.dropDownStyling}
        dropdownTextStyle={styles.dropDownTextStyling}
        dropdownTextHighlightStyle={styles.dropDownTextHighlightStyling}
        disabled={isLoading}
        onSelect={(_index, string) => {
          setTeam(string);
        }}
        defaultValue={team}>
        <View style={styles.mainLabelTextIconContainer}>
          <Text style={styles.mainDropDownModalText}>{team}</Text>
          <VectorIcon
            type={'Entypo'}
            color={colors.placeholderColor}
            name={'chevron-small-down'}
            size={Platform.isPad ? 40 : 30}
          />
        </View>
      </ModalDropdown>
      <Text></Text>
      <FlatList
        data={getRoster()}
        key={'_'}
        keyExtractor={item => '_' + item.id}
        renderItem={renderRosterItem}
      />
      <RosterItemModal
        toggleModal={val => toggleRosterItemModal(val)}
        isModalVisible={isModalVisible}
        rosterDetails={rosterDetails}
      />
    </MainContainer>
  );
};

export default TeamRostersScreen;
