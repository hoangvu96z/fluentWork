import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function DailyStandupScreen() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Bài 2 / 5</Text>
        <Text style={styles.menu}>•••</Text>
      </View>
      <Text style={styles.big}>Daily Stand-up Meeting</Text>
      <Text style={styles.label}>Câu hỏi hôm nay</Text>
      <View style={styles.bubble}>
        <Text style={styles.bubbleText}>I fixed a critical</Text>
        <Text style={styles.bubbleText}>bug yesterday.</Text>
        <View style={styles.inline}><Text style={styles.sound}>◉</Text><Text style={styles.label}>Nghe chậm</Text></View>
      </View>
      <Text style={styles.info}>Hôm qua tôi đã sửa một lỗi nghiêm trọng.</Text>
      <View style={styles.actions}>
        <Action text="Nghe nhắc" />
        <Action text="Thử lại" />
      </View>
    </View>
  );
}

function Action({ text }) {
  return (
    <TouchableOpacity style={styles.actionBtn}>
      <Text style={styles.actionText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { width: 320, backgroundColor: '#f5f7f8', borderRadius: 28, padding: 18, borderWidth: 1, borderColor: '#dfe7ea' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  back: { fontSize: 28, fontWeight: '700', color: '#233b4a' },
  title: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  menu: { fontSize: 18, fontWeight: '700', color: '#22313d' },
  big: { fontSize: 26, fontWeight: '700', color: '#22313d', lineHeight: 34 },
  label: { color: '#56707d', fontSize: 12, marginTop: 10 },
  bubble: { marginTop: 14, backgroundColor: '#edf4f7', borderRadius: 18, padding: 16 },
  bubbleText: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  inline: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  sound: { marginRight: 8 },
  info: { color: '#536774', fontSize: 13, lineHeight: 20, marginTop: 14 },
  actions: { flexDirection: 'row', marginTop: 18 },
  actionBtn: { backgroundColor: '#f2f6f7', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16, marginRight: 12 },
  actionText: { color: '#22313d', fontWeight: '600' },
});
