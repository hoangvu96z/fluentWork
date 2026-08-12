import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function PrimaryButton({ label, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'secondary' && styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, variant === 'secondary' && styles.secondaryText]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: '#1bb39f',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#f2f6f7',
    borderWidth: 1,
    borderColor: '#dfe7ea',
  },
  text: { color: '#fff', fontWeight: '700' },
  secondaryText: { color: '#22313d' },
});
