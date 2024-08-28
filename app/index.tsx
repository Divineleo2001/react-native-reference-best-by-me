import { View, Text } from 'react-native';
import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from './context/AuthContext';

const MainIndex = () => {
  const { authState } = useAuth();
  if (authState?.authenticated) {
    return <Redirect href={'/(drawer)/(tabs)/'} />;
  } else {
    return <Redirect href={'/(auth)/login'} />;
  }
};

export default MainIndex;
