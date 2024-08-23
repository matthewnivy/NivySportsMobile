import React, {useState} from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {images} from '../../../../../comman';
import {useNavigation} from '@react-navigation/native';
import {WebViewComponent} from '../../../../../components';

const Profile = () => {
  const navigation = useNavigation();

  const [linkWebView, setLinkWebView] = useState('');

  const handlerMyTickets = () => {
    setLinkWebView(
      'https://ds1.glitnirticketing.com/dsticket/mobile/login.php',
    );
  };

  const closeWebViewHandler = _id => setLinkWebView('');

  if (linkWebView) {
    return (
      <WebViewComponent
        link={linkWebView}
        closeWebViewHandler={closeWebViewHandler}
      />
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topImageContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButtonStyle}>
          <Image
            style={styles.backArrowStyle}
            resizeMode="contain"
            source={images.backNewIcon}
          />
        </TouchableOpacity>

        <View style={styles.lastContainerTop} />
      </View>
      <View style={styles.iconContainerStyle}>
        <Image
          style={styles.logoStyle}
          resizeMode="contain"
          source={images.profileIcon}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handlerMyTickets}
          style={styles.myTicketButtonStyle}>
          <Image
            style={styles.ticketIconStyle}
            resizeMode="contain"
            source={images.myTicketIcon}
          />
          <View style={styles.spacer17} />
          <Text style={styles.buttonTextHeader}>My Tickets</Text>
        </TouchableOpacity>
        <View style={styles.h20Spacer} />
        <TouchableOpacity
          onPress={() => navigation.navigate('FavoriteScreen')}
          style={styles.myTicketButtonStyle}>
          <Image
            style={styles.ticketIconStyle}
            resizeMode="contain"
            source={images.teamsMembersIcon}
          />
          <View style={styles.spacer17} />
          <Text style={styles.buttonTextHeader}>Favorite Teams</Text>
        </TouchableOpacity>
        <View style={styles.h20Spacer} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.myTicketButtonStyle}>
          <Image
            style={styles.ticketIconStyle}
            resizeMode="contain"
            source={images.infoIcon}
          />
          <View style={styles.spacer17} />
          <Text style={styles.buttonTextHeader}>About Me</Text>
        </TouchableOpacity>
        <View style={styles.h20Spacer} />
        <TouchableOpacity
          onPress={() => navigation.navigate('FeedBackScreen')}
          style={styles.myTicketButtonStyle}>
          <Image
            style={styles.ticketIconStyle}
            resizeMode="contain"
            source={images.feedbackIcon}
          />
          <View style={styles.spacer17} />
          <Text style={styles.buttonTextHeader}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
