import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const navItems = ['Trang chủ', 'Học', 'Luyện nói', 'Tiến độ', 'Hồ sơ'];

export function BottomNav() {
  return (
    <View style={styles.nav}>
      {navItems.map((item, index) => (
        <Text key={item + index} style={styles.navItem}>{item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dfe7ea',
  },
  navItem: { color: '#4b5863', fontSize: 10 },
});
