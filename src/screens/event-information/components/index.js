import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import StatsStack from './screens/stats-stack';
import MainStack from './screens/main-stack';
import WebViewStack from '../../web-view-stack';

const EventInformationStacks = props => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={MainStack}>
      <Stack.Screen
        name="MainStack"
        options={{headerShown: false}}
        component={() => <MainStack {...props} />}
      />
      <Stack.Screen
        name="StatsStack"
        options={{headerShown: false}}
        component={() => <StatsStack {...props} />}
      />
    </Stack.Navigator>
  );
};

export default EventInformationStacks;
