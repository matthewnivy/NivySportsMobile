import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {images} from '../../../../../comman';

const StatsStack = () => {
  const [selectedButton, setSelectedButton] = useState('Button1');

  const handleButtonPress = button => {
    setSelectedButton(button);
  };

  const DATA1 = {
    topData: ['1', '2', '3', '4', '5', '6', '7', 'Total'],
    secondary: ['7', '0', '0', '-', '-', '4', '7', '18'],
    secondary2: ['4', '5', '6', '-', '4', '1', '5', '25'],
  };

  const DATA2 = [
    {shotingTeam1Score: 8, label: 'Shooting', shotingTeam2Score: 12},
    {shotingTeam1Score: 22, label: 'Attacks', shotingTeam2Score: 29},
    {shotingTeam1Score: 42, label: 'Possesion', shotingTeam2Score: 58},
    {shotingTeam1Score: 42, label: 'Cards', shotingTeam2Score: 58},
    {shotingTeam1Score: 8, label: 'Corners', shotingTeam2Score: 7},
  ];

  const DATA3 = [
    {
      image1: images.teamIcon1,
      image2: images.teamIcon2,
      team1: 'Gamecocks',
      team2: 'SK',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.TopButtonContainer}>
        <TouchableOpacity
          onPress={() => handleButtonPress('Button1')}
          style={[
            selectedButton === 'Button1'
              ? styles.buttonStyle2
              : styles.buttonStyle1,
          ]}>
          <Text
            style={[
              selectedButton === 'Button1'
                ? styles.buttonTextStyle2
                : styles.buttonTextStyle1,
            ]}>
            Event Info
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => handleButtonPress('Button2')}
          style={[
            selectedButton === 'Button2'
              ? styles.buttonStyle2
              : styles.buttonStyle1,
          ]}>
          <Text
            style={[
              selectedButton === 'Button2'
                ? styles.buttonTextStyle2
                : styles.buttonTextStyle1,
            ]}>
            live stats
          </Text>
        </TouchableOpacity> */}
      </View>
      {selectedButton === 'Button2' && (
        <>
          <View style={styles.tableContainer}>
            <View style={styles.top1Container}>
              <View style={styles.mainTopLeftContainer} />
              {DATA1.topData.map((val, index) => {
                return (
                  <View style={styles.dataContainer}>
                    <Text style={styles.textTop}>{val}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.secondaryDataContainer}>
              <Image
                source={images.teamIcon1}
                resizeMode="contain"
                style={styles.dataImage}
              />
              <View style={styles.spacer4} />
              {DATA1.secondary.map((val, index) => {
                return (
                  <View style={styles.dataContainer}>
                    <Text style={styles.textTopSecond}>{val}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.secondaryDataContainer2}>
              <Image
                source={images.teamIcon2}
                resizeMode="contain"
                style={styles.dataImage}
              />
              <View style={styles.spacer4} />
              {DATA1.secondary2.map((val, index) => {
                return (
                  <View style={styles.dataContainer}>
                    <Text style={styles.textTopSecond}>{val}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <View style={styles.mainSecondDataTableContainer}>
            {DATA2.map((val, index) => {
              const isEvenIndex = index % 2 === 0;
              return (
                <View style={styles.datacontainerOne} key={index}>
                  <View
                    style={[
                      isEvenIndex
                        ? styles.datacontainerThree
                        : styles.datacontainerTwo,
                    ]}>
                    <Text style={styles.shootingScoreStyle}>
                      {val.shotingTeam1Score}
                    </Text>
                    <Text style={styles.labelStyle}>{val.label}</Text>
                    <Text style={styles.shootingScoreStyle}>
                      {val.shotingTeam2Score}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.fotterHeaderContainer}>
            <Text style={styles.otherMatchLabel}>Other Match</Text>
            <Text style={styles.seeAllLabel}>See all</Text>
          </View>
          <View style={styles.fotterContainer}>
            {DATA3.map((val, index) => {
              return (
                <View style={styles.mainCardContainer}>
                  <Image
                    source={val.image1}
                    resizeMode="contain"
                    style={styles.dataFotterImage}
                  />
                  <Text style={styles.barStyle}>|</Text>
                  <Image
                    source={val.image2}
                    resizeMode="contain"
                    style={styles.dataFotterImage}
                  />
                  <Text style={styles.fotterText}>
                    {val.team1} vs {val.team2}
                  </Text>
                </View>
              );
            })}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default StatsStack;
