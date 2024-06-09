/* eslint-disable prettier/prettier */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavivgation from './components/navigation/AppNavivgation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavivgation />
    </NavigationContainer>
  );
};
export default App;
