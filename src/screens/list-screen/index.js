import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import TeamListScreen from './team-list-screen';
import TeamScreen from './team-screen';
import {colors} from '../../comman';

const TeamsStacks = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  // Stack for the team lists and pages
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'TeamScreen',
        headerStyle: {
          backgroundColor: colors.nivyPrimaryColor,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        headerTitleAlign: 'center',
        statusBarColor: colors.nivyPrimaryColor,
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={25}
            color={colors.white}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
      initialRouteName={TeamScreen}>
      <Stack.Screen
        name="TeamScreen"
        options={{headerShown: false}}
        component={TeamScreen}
      />
      <Stack.Screen
        name="TeamListScreen"
        options={{headerShown: false}}
        component={TeamListScreen}
      />
    </Stack.Navigator>
  );
};

export default TeamsStacks;
