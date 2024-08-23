import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {UnaImageComponent} from '../una-image-component';
import {styles} from './styles';

const StoryCard = ({
  id,
  title,
  reactangleIcon,
  heartRedIcon,
  messageIcon,
  sendIcon,
  avatarIcon,
  postImage,
}) => {
  return (
    <View key={id} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.upperLeftContainer}>
          <UnaImageComponent
            style={styles.leftTopIcon}
            imgName={avatarIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.smallSpacerTopLeftContainer} />
          <View style={styles.containerLeftTopContainer}>
            <Text style={styles.titleTextTopLeft}>{title}</Text>
            <Text style={styles.hoursTextTopLeft}>4 h</Text>
          </View>
        </View>
        <TouchableOpacity>
          <UnaImageComponent
            style={styles.rightTopIcon}
            imgName={reactangleIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainerStyle}>
        <UnaImageComponent
          style={styles.middleImageStyle}
          imgName={postImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftButtonContainer}>
          <TouchableOpacity style={styles.heartButtonStyle}>
            <UnaImageComponent
              style={styles.heartIconStyle}
              imgName={heartRedIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.smallSpacerTopLeftContainer} />
            <Text style={styles.iconTextNumber}>23</Text>
          </TouchableOpacity>
          <View style={styles.bottomIconButtonsSpacer} />
          <TouchableOpacity style={styles.heartButtonStyle}>
            <UnaImageComponent
              style={styles.heartIconStyle}
              imgName={messageIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.smallSpacerTopLeftContainer} />
            <Text style={styles.iconTextNumber}>2</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.heartButtonStyle}>
          <UnaImageComponent
            style={styles.heartIconStyle}
            imgName={sendIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StoryCard;
