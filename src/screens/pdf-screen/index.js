import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import Pdf from 'react-native-pdf';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Progress from 'react-native-progress';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {PDF_LIST} from '../../comman/data';
import {getGameProgramsListApi} from '../../utils/rest-apis';
import {images} from '../../comman';

const PdfScreen = ({route}) => {
  const navigation = useNavigation();

  const [pdfBool, setpdfBool] = useState(false);
  const [gamePlanData2, setGamePlanData2] = useState(false);
  const [progressStat, setProgressStat] = useState(0);
  const [pdfLink, setPdfLink] = useState(
    'https://api.printnode.com/static/test/pdf/multipage.pdf',
  );
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const backNavigationHandler = () => {
    navigation.goBack();
    setpdfBool(false);
  };

  const handleEndReached = async () => {
    // You can implement additional logic here if needed
    // For example, fetch more data from the API to show additional items in the list.

    try {
      const response = await getGameProgramsListApi();
      if (response.status === true) {
        setIsRefreshing(false);
        setGamePlanData2(response?.content || []);
      } else {
        setIsRefreshing(false);
      }
    } catch (error) {
      setIsRefreshing(false);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    handleEndReached();
  };

  useFocusEffect(
    React.useCallback(() => {
      getGameProgramsListApiHandler();
    }, []),
  );

  const getGameProgramsListApiHandler = async () => {
    try {
      const response = await getGameProgramsListApi();
      setGamePlanData2(response?.content?.gamePrograms || []);
    } catch (error) {}
  };

  const dataPdfHandler = item => {
    setPdfLink(item);
    setpdfBool(true);
  };

  const onLoadProgressHandler = percentage => setProgressStat(percentage * 100);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          dataPdfHandler(item?.url);
        }}
        style={styles.buttonItem}>
        <View style={styles.topImageEventContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageEventStyle}
              resizeMode="contain"
              source={{uri: `${item?.image}`}}
            />
          </View>
          <View style={styles.mainEventTextContainer}>
            <Text style={styles.titleTextName}>{item?.title}</Text>
            <Text style={styles.titleTextEvent}>{item?.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.topImageContainer}>
        <TouchableOpacity onPress={backNavigationHandler}>
          <Image
            style={styles.backRosterImageStyle}
            resizeMode="contain"
            source={images.backRosterImage}
          />
        </TouchableOpacity>
        <Text style={styles.headingTextHeader}>Game Programs</Text>
        {pdfBool ? (
          <TouchableOpacity onPress={() => setpdfBool(false)}>
            <AntDesign name="close" size={30} color="#900" />
          </TouchableOpacity>
        ) : (
          <View style={styles.spacerHeader} />
        )}
      </View>
      <>
        {pdfBool ? (
          <View style={styles.pdfBoolMainContainer}>
            <Pdf
              trustAllCerts={false}
              source={{
                uri: pdfLink,
              }}
              page={1}
              scale={1.0}
              minScale={0.5}
              maxScale={3.0}
              renderActivityIndicator={() => (
                <>
                  <Progress.Bar
                    progress={progressStat / 100} // Normalize to a value between 0 and 1
                    color="rgba(89, 43, 129, 1)"
                    width={200}
                  />
                  <Text style={styles.loadingProgressText}>{`${Math.round(
                    progressStat,
                  )}%`}</Text>
                </>
              )}
              enablePaging={false}
              onLoadProgress={onLoadProgressHandler}
              onLoadComplete={() => setProgressStat(100)}
              onPageChanged={(page, totalPages) =>
                console.log(`${page}/${totalPages}`)
              }
              onError={error => console.log(error)}
              onPressLink={link => Linking.openURL(link)}
              onScaleChanged={scale => console.log(scale)}
              spacing={0}
              // horizontal
              style={{flex: 1, width: Dimensions.get('window').width}}
            />
          </View>
        ) : (
          <View style={styles.secondContainer}>
            {PDF_LIST.length === 0 ? (
              <View style={styles.centeredView}>
                <Text style={styles.errorText}>
                  Sorry, something went wrong
                </Text>
              </View>
            ) : (
              <>
                <FlatList
                  data={gamePlanData2}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  refreshControl={
                    <RefreshControl
                      refreshing={isRefreshing}
                      onRefresh={handleRefresh}
                    />
                  }
                  onEndReached={handleEndReached}
                  onEndReachedThreshold={0.1}
                  onScroll={() => {
                    setIsEndReached(false);
                  }}
                />
              </>
            )}
          </View>
        )}
      </>
    </>
  );
};

export default PdfScreen;
