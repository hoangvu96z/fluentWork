import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function AppHeader({ title, subtitle, showBrand = false, align = 'center' }) {
  return (
    <View style={[styles.header, align === 'left' && styles.headerLeft]}>
      {showBrand ? (
        <View style={styles.brandWrap}>
          <Text style={styles.brandMark}>F</Text>
          <Text style={styles.brandText}>{title}</Text>
        </View>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  headerLeft: { alignItems: 'flex-start' },
  brandWrap: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  brandMark: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#1bb39f',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '700',
  },
  brandText: { fontSize: 28, fontWeight: '700', color: '#1e2e39' },
  title: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  subtitle: { marginTop: 6, color: '#5d6d79', fontSize: 12 },
});
