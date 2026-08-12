import React from 'react';
import { View, StyleSheet } from 'react-native';

export function InfoCard({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: '#f7f7f7',
    borderRadius: 28,
    padding: 18,
    borderWidth: 1,
    borderColor: '#dfe7ea',
    marginBottom: 18,
  },
});
