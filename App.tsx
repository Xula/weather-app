import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Container>
      <Text>start</Text>
      <StatusBar style="auto" />
    </Container>
  );
}