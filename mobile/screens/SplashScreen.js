import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.brand}>FluentWork</Text>
        <Text style={styles.title}>Tiếng Anh công sở, nhanh gọn, thực tế.</Text>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>Daily standups</Text>
          <Text style={styles.badge}>Meeting practice</Text>
        </View>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>Pronunciation</Text>
          <Text style={styles.badge}>Email & chat</Text>
        </View>
        <Text style={styles.subtitle}>Đang chuẩn bị trải nghiệm app. Chuyển sang đăng nhập ngay sau đây...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: 340,
    backgroundColor: '#ffffff',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  brand: {
    color: '#1bb39f',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#22313d',
    lineHeight: 30,
    marginBottom: 18,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#edf7f3',
    color: '#1b8f78',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 18,
    color: '#556b76',
    fontSize: 13,
    lineHeight: 20,
  },
});
