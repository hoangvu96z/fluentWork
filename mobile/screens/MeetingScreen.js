import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MeetingScreen() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Mô phỏng cuộc họp</Text>
      </View>
      <Text style={styles.label}>Tình huống: Daily stand-up với team</Text>
      <View style={styles.chatBox}>
        <Text style={styles.user}>AI Team Lead</Text>
        <Text style={styles.text}>Good morning, Nam. What did you work on yesterday?</Text>
        <Text style={[styles.user, styles.right]}>Bạn</Text>
        <Text style={styles.rightText}>Yesterday, I fixed a critical bug in the payment flow.</Text>
        <Text style={styles.user}>AI Team Lead</Text>
        <Text style={styles.text}>Great. What are you working on today?</Text>
      </View>
      <View style={styles.mic}><Text style={styles.micText}>◉</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 320, backgroundColor: '#f5f7f8', borderRadius: 28, padding: 18, borderWidth: 1, borderColor: '#dfe7ea' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  back: { fontSize: 28, fontWeight: '700', color: '#233b4a', marginRight: 12 },
  title: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  label: { color: '#58707d', fontSize: 12, marginTop: 6 },
  chatBox: { marginTop: 14, backgroundColor: '#eef3f5', borderRadius: 16, padding: 12 },
  user: { color: '#22313d', fontWeight: '700', marginBottom: 6 },
  right: { textAlign: 'right', marginTop: 8 },
  text: { backgroundColor: '#fff', borderRadius: 12, padding: 10, color: '#2b3d49', marginBottom: 10 },
  rightText: { backgroundColor: '#dff7f2', borderRadius: 12, padding: 10, color: '#234c4a', marginBottom: 10 },
  mic: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#1bb39f', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 16 },
  micText: { color: '#fff', fontSize: 22 },
});
