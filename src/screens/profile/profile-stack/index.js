import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import ProfileScreen from './screens/profile-screen';
import FavoriteScreen from './screens/favorite-teams';
import Profile from './screens/main-screen';
import FeedBackScreen from './screens/feedback-screen';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  // Show the profile stack
  return (
    <Stack.Navigator initialRouteName={Profile}>
      <Stack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
      <Stack.Screen
        name="ProfileScreen"
        options={{headerShown: false}}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="FavoriteScreen"
        options={{headerShown: false}}
        component={FavoriteScreen}
      />
      <Stack.Screen
        name="FeedBackScreen"
        options={{headerShown: false}}
        component={FeedBackScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
