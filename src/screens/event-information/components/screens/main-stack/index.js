import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {images, screenName} from '../../../../../comman';
import BackIcon from '../../../../../comman/images/backIcon.svg';
import WebView from 'react-native-webview';
import {ApplicationContext} from '../../../../../context-api/Context';
import {
  ArrowSvgComponent,
  BuyTicketsSvgComponent,
  ListenIconSvgComponent,
  NotePadIconSvgComponent,
  WatchIconSvgComponent,
} from '../../../../../utils';

const DATA = [
  {
    id: 1,
    image: images.baseBallTeamImg,
    title: 'Baseball',
    scheduleListUrlLink: 'https://roarlions.com/sports/baseball/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/baseball/roster',
    newsUrlLink: 'https://roarlions.com/sports/baseball',
  },
  {
    id: 2,
    image: images.basketBallTeamImg,
    title: 'Basketball',
    scheduleListUrlLink:
      'https://roarlions.com/sports/mens-basketball/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/mens-basketball/roster',
    newsUrlLink: 'https://roarlions.com/sports/mens-basketball',
  },
  {
    id: 3,
    image: images.crossCountryTeamImg,
    title: 'Cross Country',
    scheduleListUrlLink:
      'https://roarlions.com/sports/mens-cross-country/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/mens-cross-country/roster',
    newsUrlLink: 'https://roarlions.com/sports/mens-cross-country',
  },
  {
    id: 4,
    image: images.footBallTeamImg,
    title: 'FootBall',
    scheduleListUrlLink: 'https://roarlions.com/sports/football/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/football/roster',
    newsUrlLink: 'https://roarlions.com/sports/football',
  },
  {
    id: 5,
    image: images.golfTeamImg,
    title: 'Golf',
    scheduleListUrlLink: 'https://roarlions.com/sports/mens-golf/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/mens-golf/roster',
    newsUrlLink: 'https://roarlions.com/sports/mens-golf',
  },
  {
    id: 6,
    image: images.tennisTeamImg,
    title: 'Tennis',
    scheduleListUrlLink: 'https://roarlions.com/sports/mens-tennis/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/mens-tennis/roster',
    newsUrlLink: 'https://roarlions.com/sports/mens-tennis',
  },
];

const WOMEN_DATA = [
  {
    id: 1,
    image: images.wBasketBallTeamImg,
    title: 'BasketBall',
    scheduleListUrlLink:
      'https://roarlions.com/sports/womens-basketball/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/womens-basketball/roster',
    newsUrlLink: 'https://roarlions.com/sports/womens-basketball',
  },
  {
    id: 2,
    image: images.beachVolleyBallTeamImg,
    title: 'Beach VolleyBall',
    scheduleListUrlLink:
      'https://roarlions.com/sports/womens-beach-volleyball/schedule',
    rosterUrlLink:
      'https://roarlions.com/sports/womens-beach-volleyball/roster',
    newsUrlLink: 'https://roarlions.com/sports/womens-beach-volleyball',
  },
  {
    id: 3,
    image: images.crossCountryTeamImg,
    title: 'Cross Country',
    scheduleListUrlLink:
      'https://roarlions.com/sports/womens-cross-country/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/womens-cross-country/roster',
    newsUrlLink: 'https://roarlions.com/sports/womens-cross-country',
  },
  {
    id: 4,
    image: images.wGolfTeamImg,
    title: 'Golf',
    scheduleListUrlLink: 'https://roarlions.com/sports/womens-golf/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/womens-golf/roster',
    newsUrlLink: 'https://roarlions.com/sports/wvball?path=womensgolf',
  },
  {
    id: 5,
    image: images.soccerBallTeamImg,
    title: 'Soccer',
    scheduleListUrlLink: 'https://roarlions.com/sports/womens-soccer/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/womens-soccer/roster',
    newsUrlLink: 'https://roarlions.com/sports/womens-soccer',
  },
  {
    id: 6,
    image: images.softBallTeamImg,
    title: 'SoftBall',
    scheduleListUrlLink: 'https://roarlions.com/sports/softball/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/softball/roster',
    newsUrlLink: 'https://roarlions.com/sports/softball',
  },
  {
    id: 7,
    image: images.tennisTeamImg,
    title: 'Tennis',
    scheduleListUrlLink: 'https://roarlions.com/sports/womens-tennis/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/womens-tennis/roster',
    newsUrlLink: 'https://roarlions.com/sports/womens-tennis',
  },
  {
    id: 8,
    image: images.volleyBallTeamImg,
    title: 'Volleyball',
    scheduleListUrlLink: 'https://roarlions.com/sports/wvball/schedule',
    rosterUrlLink: 'https://roarlions.com/sports/wvball/roster',
    newsUrlLink: 'https://roarlions.com/sports/wvball',
  },
];

const MainStack = ({teamDetails}) => {
  const [pressedButton, setPressedButton] = useState(null);
  const navigation = useNavigation();

  const {itemWebLinkData, setItemWebLinkData} = useContext(ApplicationContext);
  console.log('teamDetails', teamDetails);
  const sportTitletName = teamDetails?.sport?.title;
  const media = teamDetails?.media;
  const tv = teamDetails?.media?.tv;
  const vr_at = teamDetails?.at_vs;
  const stats = teamDetails?.media?.stats;
  const gameNotes = teamDetails?.media?.gamefiles[0]?.url;
  const previewLink = `https://www.roarlions.com${media?.preview?.url}`;

  const findTeamByCategory = category => {
    let categoryLowerCase = category.toLowerCase();

    // Check if it's a men's team
    if (categoryLowerCase.startsWith("men's ")) {
      const menCategory = categoryLowerCase.replace("men's ", '');
      console.log("Searching in DATA for men's category:", menCategory);
      const menTeam = DATA.find(
        team => team.title.toLowerCase() === menCategory,
      );
      console.log("Found team for men's category:", menTeam);
      return menTeam;
    }

    // Check if it's a women's team
    if (categoryLowerCase.startsWith("women's ")) {
      const womenCategory = categoryLowerCase.replace("women's ", '');
      console.log(
        "Searching in WOMEN_DATA for women's category:",
        womenCategory,
      );
      const womenTeam = WOMEN_DATA.find(
        team => team.title.toLowerCase() === womenCategory,
      );
      console.log("Found team for women's category:", womenTeam);
      return womenTeam;
    }

    // If it's not categorized by gender, search in both arrays
    console.log('Searching in both arrays for category:', categoryLowerCase);
    const team = DATA.concat(WOMEN_DATA).find(
      team => team.title.toLowerCase() === categoryLowerCase,
    );
    console.log('Found team for category:', team);
    return team;
  };

  const closeWebViewHandler = () => navigation.navigate('MainStack');

  const convertToHttps = url =>
    url?.startsWith('http://') ? url?.replace('http://', 'https://') : url;

  const handleButtonPress = buttonText => {
    if (buttonText === 'Team Info') {
      const team = findTeamByCategory(sportTitletName);
      setPressedButton(buttonText);
      navigation.navigate('TeamListScreen', {
        rosterUrlLink: team?.rosterUrlLink,
        scheduleListUrlLink: team?.scheduleListUrlLink,
        newsListUrlLink: team?.newsUrlLink,
        title: sportTitletName,
      });
    } else if (buttonText === 'Preview') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: `https://www.roarlions.com${media?.preview?.url}`,
      });
    } else if (buttonText === 'History') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: convertToHttps(stats?.url),
      });
    } else if (buttonText === 'Stats') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: convertToHttps(stats?.url),
      });
      gameNotes;
    } else if (buttonText === 'Gamenotes') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: `https://www.roarlions.com${gameNotes}`,
      });
    } else if (buttonText === 'Watch') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: convertToHttps(media?.video?.url),
      });
    } else if (buttonText === 'Listen') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: `${media?.audio?.url}`,
      });
    } else if (buttonText === 'BuyTicket') {
      navigation.navigate('WebViewStack', {
        closeWebViewHandler: closeWebViewHandler,
        urlLink: `https://ds1.glitnirticketing.com/dsticket/web/ev_list.php`,
      });
    } else {
      setPressedButton(buttonText);
    }
  };

  return (
    <View style={styles.secondContainer}>
      <TouchableOpacity
        onPress={() => handleButtonPress('Team Info')}
        style={[
          pressedButton === 'Team Info'
            ? styles.buttonMainStyle
            : styles.buttonMainStyle2,
        ]}>
        <View>
          <Image
            source={images.teamInfo} // Replace with the actual path to your image
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text
          style={[
            pressedButton === 'Team Info'
              ? styles.textButtonStyle
              : styles.textButtonStyle2,
          ]}>
          Team Info
        </Text>
        <View style={styles.arrow}>
          <ArrowSvgComponent fill="#787878" width={20} height={13} />
        </View>
      </TouchableOpacity>
      {media?.history?.url && (
        <>
          <TouchableOpacity
            onPress={() => handleButtonPress('History')}
            style={[
              pressedButton === 'History'
                ? styles.buttonMainStyle
                : styles.buttonMainStyle2,
            ]}>
            <View>
              <Image
                source={images.teamInfo} // Replace with the actual path to your image
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text
              style={[
                pressedButton === 'History'
                  ? styles.textButtonStyle
                  : styles.textButtonStyle2,
              ]}>
              History
            </Text>
            <View style={styles.arrow}>
              <ArrowSvgComponent fill="#787878" width={20} height={13} />
            </View>
          </TouchableOpacity>
        </>
      )}
      {stats?.url && (
        <>
          <TouchableOpacity
            onPress={() => handleButtonPress('Stats')}
            style={[
              pressedButton === 'Stats'
                ? styles.buttonMainStyle
                : styles.buttonMainStyle2,
            ]}>
            <View>
              <Image
                source={images.stats} // Replace with the actual path to your image
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text
              style={[
                pressedButton === 'Stats'
                  ? styles.textButtonStyle
                  : styles.textButtonStyle2,
              ]}>
              {stats?.title}
            </Text>
            <View style={styles.arrow}>
              <ArrowSvgComponent fill="#787878" width={20} height={13} />
            </View>
          </TouchableOpacity>
        </>
      )}
      {gameNotes && (
        <>
          <TouchableOpacity
            onPress={() => handleButtonPress('Gamenotes')}
            style={[
              pressedButton === 'Gamenotes'
                ? styles.buttonMainStyle
                : styles.buttonMainStyle2,
            ]}>
            <View>
              <Image
                source={images.gamenotes} // Replace with the actual path to your image
                resizeMode="contain"
                style={styles.image2}
              />
            </View>
            <Text
              style={[
                pressedButton === 'Gamenotes'
                  ? styles.textButtonStyle
                  : styles.textButtonStyle2,
              ]}>
              Game Notes
            </Text>
            <View style={styles.arrow}>
              <ArrowSvgComponent fill="#787878" width={20} height={13} />
            </View>
          </TouchableOpacity>
        </>
      )}
      {media?.preview?.url && (
        <TouchableOpacity
          onPress={() => handleButtonPress('Preview')}
          style={[
            pressedButton === 'Preview'
              ? styles.buttonMainStyle
              : styles.buttonMainStyle2,
          ]}>
          <View>
            <Image
              source={images.preview} // Replace with the actual path to your image
              resizeMode="contain"
              style={styles.image2}
            />
          </View>
          <Text
            style={[
              pressedButton === 'Preview'
                ? styles.textButtonStyle
                : styles.textButtonStyle2,
            ]}>
            Preview
          </Text>
          <View style={styles.arrow}>
            <ArrowSvgComponent fill="#787878" width={20} height={13} />
          </View>
        </TouchableOpacity>
      )}
      {media?.video?.url && (
        <TouchableOpacity
          onPress={() => handleButtonPress('Watch')}
          style={[
            pressedButton === 'Watch'
              ? styles.buttonMainStyle
              : styles.buttonMainStyle2,
          ]}>
          <View>
            <Image
              source={images.watch} // Replace with the actual path to your image
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text
            style={[
              pressedButton === 'Watch'
                ? styles.textButtonStyle
                : styles.textButtonStyle2,
            ]}>
            Watch
          </Text>
          <View style={styles.arrow}>
            <ArrowSvgComponent fill="#787878" width={20} height={13} />
          </View>
        </TouchableOpacity>
      )}
      {media?.audio?.url && (
        <TouchableOpacity
          onPress={() => handleButtonPress('Listen')}
          style={[
            pressedButton === 'Listen'
              ? styles.buttonMainStyle
              : styles.buttonMainStyle2,
          ]}>
          <View>
            <Image
              source={images.listen} // Replace with the actual path to your image
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text
            style={[
              pressedButton === 'Listen'
                ? styles.textButtonStyle
                : styles.textButtonStyle2,
            ]}>
            Listen
          </Text>
          <View style={styles.arrow}>
            <ArrowSvgComponent fill="#787878" width={20} height={13} />
          </View>
        </TouchableOpacity>
      )}
      {vr_at === 'vs' && (
        <TouchableOpacity
          onPress={() => handleButtonPress('BuyTicket')}
          style={[
            pressedButton === 'BuyTicket'
              ? styles.buttonMainStyle
              : styles.buttonMainStyle2,
          ]}>
          <BuyTicketsSvgComponent width={36} height={36} />
          <Text
            style={[
              pressedButton === 'BuyTicket'
                ? styles.textButtonStyle
                : styles.textButtonStyle2,
            ]}>
            Buy Tickets
          </Text>
          <View style={styles.arrow}>
            <ArrowSvgComponent fill="#787878" width={20} height={13} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MainStack;
