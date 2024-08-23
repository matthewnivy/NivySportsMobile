import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import StatsStack from './screens/stats-stack';
import MainStack from './screens/main-stack';

const EventInformationStacks = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={MainStack}>
      <Stack.Screen
        name="MainStack"
        options={{headerShown: false}}
        component={MainStack}
      />
      <Stack.Screen
        name="StatsStack"
        options={{headerShown: false}}
        component={StatsStack}
      />
    </Stack.Navigator>
  );
};

export default EventInformationStacks;
