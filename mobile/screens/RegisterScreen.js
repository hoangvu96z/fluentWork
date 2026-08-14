import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    setLoading(true);
    fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, displayName }),
    })
      .then(async (res) => {
        setLoading(false);
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || 'Register failed');
        }
        return res.json();
      })
      .then((data) => {
        AsyncStorage.setItem('fw_token', data.token || '');
        navigation.replace('Home');
      })
      .catch((err) => setError(err.message || 'Register failed'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Tạo tài khoản</Text>
        <Text style={styles.subheading}>Tạo tài khoản mới để lưu lộ trình học của bạn.</Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} placeholderTextColor="#8a99a3" />
        <TextInput style={styles.input} placeholder="Tên hiển thị" value={displayName} onChangeText={setDisplayName} placeholderTextColor="#8a99a3" />
        <TextInput style={styles.input} placeholder="Mật khẩu" secureTextEntry value={password} onChangeText={setPassword} placeholderTextColor="#8a99a3" />
        <TouchableOpacity style={styles.primaryButton} onPress={handleRegister} disabled={loading}>
          <Text style={styles.primaryText}>{loading ? 'Đang...' : 'Tạo tài khoản'}</Text>
        </TouchableOpacity>
        {error ? <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text> : null}
        <Text style={styles.footerText}>Đã có tài khoản? <Text style={styles.link} onPress={() => navigation.replace('Login')}>Đăng nhập</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e9f2f5', justifyContent: 'center', alignItems: 'center', padding: 24 },
  card: { width: 340, backgroundColor: '#ffffff', borderRadius: 28, padding: 24, shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 8 },
  heading: { fontSize: 24, color: '#22313d', fontWeight: '800', marginBottom: 8 },
  subheading: { fontSize: 13, color: '#5d6d79', lineHeight: 20, marginBottom: 22 },
  input: { height: 48, borderWidth: 1, borderColor: '#dfe7ea', borderRadius: 14, paddingHorizontal: 16, marginBottom: 14, color: '#22313d', backgroundColor: '#f9fbfb' },
  primaryButton: { marginTop: 8, backgroundColor: '#1bb39f', borderRadius: 14, alignItems: 'center', paddingVertical: 14 },
  primaryText: { color: '#ffffff', fontWeight: '700' },
  footerText: { marginTop: 16, color: '#5d6d79', fontSize: 12, textAlign: 'center' },
  link: { color: '#1bb39f', fontWeight: '700' },
});
