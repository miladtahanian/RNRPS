import React from 'react';
import { StyleSheet, View } from 'react-native';
import RPSGame from './src/RPSGame';

export default function App() {
  return (
    <View style={styles.container}>
      <RPSGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
