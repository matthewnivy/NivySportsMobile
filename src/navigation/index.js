import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from './tab-stack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
