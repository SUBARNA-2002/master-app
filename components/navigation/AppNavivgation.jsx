/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from '../screens/Drawer/Settings';
import PasswordGenerator from '../screens/Drawer/PasswordGenerator';
const AppNavivgation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Password Generator" component={PasswordGenerator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default AppNavivgation;
