/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigate = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Profile" onPress={() => navigate.navigate('Profile')} />
    </View>
  );
};

export default Home;
