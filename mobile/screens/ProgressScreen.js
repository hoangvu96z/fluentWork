import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function ProgressScreen() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.title}>Tiến độ của bạn</Text>
        <Text style={styles.menu}>☰</Text>
      </View>
      <View style={styles.streak}><Text style={styles.streakText}>7 ngày liên tiếp</Text></View>
      <Text style={styles.label}>Hoạt động tuần này</Text>
      <View style={styles.barGroup}>
        <Bar height={52} label="T2" />
        <Bar height={60} label="T3" />
        <Bar height={48} label="T4" />
        <Bar height={58} label="T5" />
        <Bar height={36} label="T6" />
      </View>
      <View style={styles.stats}>
        <Stat value="72%" label="Speaking" />
        <Stat value="64%" label="Vocabulary" />
        <Stat value="58%" label="Listening" />
      </View>
      <View style={styles.cta}>
        <Text style={styles.label}>Hoàn thành 2 bài nữa để mở khóa:</Text>
        <TouchableOpacity style={styles.primaryBtn}><Text style={styles.primaryText}>Handling a Client Call</Text></TouchableOpacity>
      </View>
    </View>
  );
}

function Bar({ height, label }) {
  return (
    <View style={styles.barCol}>
      <View style={[styles.bar, { height }]} />
      <Text style={styles.barLabel}>{label}</Text>
    </View>
  );
}

function Stat({ value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 320, backgroundColor: '#f5f7f8', borderRadius: 28, padding: 18, borderWidth: 1, borderColor: '#dfe7ea' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  back: { fontSize: 28, fontWeight: '700', color: '#233b4a' },
  title: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  menu: { fontSize: 20, fontWeight: '700', color: '#22313d' },
  streak: { alignSelf: 'flex-start', backgroundColor: '#f9d38f', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 12, marginBottom: 12 },
  streakText: { color: '#5b3d08', fontWeight: '700' },
  label: { color: '#56707d', fontSize: 12 },
  barGroup: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 16, marginBottom: 12 },
  barCol: { alignItems: 'center' },
  bar: { width: 22, borderRadius: 8, backgroundColor: '#36c6a4' },
  barLabel: { marginTop: 8, color: '#556a76', fontSize: 12 },
  stats: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  statCard: { width: 86, backgroundColor: '#f0f5f6', borderRadius: 12, padding: 12, alignItems: 'center' },
  statValue: { fontSize: 22, fontWeight: '700', color: '#22313d' },
  statLabel: { fontSize: 11, color: '#5a6a76', textAlign: 'center' },
  cta: { marginTop: 18, backgroundColor: '#edf5f7', borderRadius: 18, padding: 12 },
  primaryBtn: { marginTop: 12, backgroundColor: '#1bb39f', borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  primaryText: { color: '#fff', fontWeight: '700' },
});
