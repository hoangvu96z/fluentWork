import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const navItems = [
  { label: 'Trang chủ', route: 'Home' },
  { label: 'Học', route: 'DailyStandup' },
  { label: 'Luyện nói', route: 'Pronunciation' },
  { label: 'Tiến độ', route: 'Progress' },
];

export function BottomNav({ navigation }) {
  return (
    <View style={styles.nav}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.route}
          style={styles.navItemWrap}
          onPress={() => navigation.navigate(item.route)}
        >
          <Text style={styles.navItem}>{item.label}</Text>
        </TouchableOpacity>
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
  navItemWrap: {
    flex: 1,
    alignItems: 'center',
  },
  navItem: { color: '#4b5863', fontSize: 11, textAlign: 'center' },
});

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
