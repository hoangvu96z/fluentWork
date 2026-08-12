import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function PronunciationScreen() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Luyện phát âm</Text>
      </View>
      <Text style={styles.label}>Đọc câu bên dưới một cách tự nhiên</Text>
      <Text style={styles.quote}>I fixed a critical bug yesterday.</Text>
      <View style={styles.waveBlock}>
        {[1,2,3,4,5].map((n) => <View key={n} style={styles.waveDot} />)}
      </View>
      <View style={styles.row}><Text style={styles.bold}>Phát âm:</Text><Text style={styles.green}>82/100</Text></View>
      <View style={styles.row}><Text style={styles.badge}>Rõ ràng</Text><Text style={styles.note}>Cần cải thiện: critical</Text></View>
      <View style={styles.actions}>
        <Action text="Nghe lại" />
        <Action text="Thử lại" />
      </View>
    </View>
  );
}

function Action({ text }) {
  return <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionText}>{text}</Text></TouchableOpacity>;
}

const styles = StyleSheet.create({
  card: { width: 320, backgroundColor: '#f5f7f8', borderRadius: 28, padding: 18, borderWidth: 1, borderColor: '#dfe7ea' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  back: { fontSize: 28, fontWeight: '700', color: '#233b4a', marginRight: 12 },
  title: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  label: { color: '#58707d', fontSize: 12, marginTop: 6 },
  quote: { fontSize: 18, fontWeight: '700', color: '#22313d', marginTop: 14, marginBottom: 14 },
  waveBlock: { height: 80, backgroundColor: '#edf7f3', borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  waveDot: { width: 6, height: 26, backgroundColor: '#7ad7bf', borderRadius: 4, marginHorizontal: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  bold: { color: '#22313d', fontWeight: '700' },
  green: { color: '#1bb39f', fontWeight: '700' },
  badge: { backgroundColor: '#ebfaf5', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 6, color: '#1b886d', fontWeight: '700' },
  note: { color: '#5d6f7b', fontSize: 12 },
  actions: { flexDirection: 'row', marginTop: 10 },
  actionBtn: { backgroundColor: '#f2f6f7', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16, marginRight: 12 },
  actionText: { color: '#22313d', fontWeight: '600' },
});
