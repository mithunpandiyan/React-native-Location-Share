import React, {useState, useEffect} from 'react';
import {
  Button,
  Text,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
} from 'native-base';
import styles from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';

const header = ({title, navigation}) => {
  const logout = () => {
    AsyncStorage.removeItem('auth');
    navigation.navigate('login');
  };
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => logout()}>
          <Text>Logout</Text>
          <Icon name="log-out" />
        </Button>
      </Right>
    </Header>
  );
};

export default header;
