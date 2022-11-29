import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import AppButton from './src/components/Button';

const instructions = 'Press prototype to see button animation';

const App = () => (
  <View style={styles.main}>
    <Text style={styles.title}>{instructions}</Text>
    <AppButton title='Join' title2='Joined' />
  </View>
);

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    width: '75%',
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'ProductSans-Bold',
  },
});

export default App;
