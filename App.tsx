import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';

import styled from 'styled-components/native';
import { Routes } from './src/routes';

const Container = styled.View`
  //background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}