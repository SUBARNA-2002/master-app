/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import DrawerNavigator from './Drawer/DrawerNavigator';

const Profile = () => {
//   const navigate = useNavigation();
  return (
    <View>
      <DrawerNavigator />
    </View>
  );
};

export default Profile;
