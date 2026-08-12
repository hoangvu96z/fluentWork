import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppHeader } from '../components/common/AppHeader';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { InformationCard } from '../components/ui/InformationCard';
import { BottomNav } from '../components/common/BottomNav';

export function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <AppHeader title="FluentWork" showBrand />

      <InformationCard>
        <Text style={styles.title}>Tiếng Anh cho</Text>
        <Text style={styles.title}>công việc của bạn</Text>
        <Text style={styles.muted}>Học ngắn mỗi ngày. Dùng được ngay trong công việc.</Text>
        <View style={styles.mockupBox} />
        <View style={styles.tagRow}>
          <Text style={styles.tag}>IT English</Text>
          <Text style={styles.tag}>Họp & thuyết trình</Text>
        </View>
        <View style={styles.tagRow}>
          <Text style={styles.tag}>Phỏng vấn</Text>
          <Text style={styles.tag}>Email & chat</Text>
        </View>
        <View style={styles.tagRow}>
          <Text style={styles.tagSoft}>Mới bắt đầu</Text>
          <Text style={styles.tagSoft}>Cơ bản</Text>
          <Text style={styles.tagSoft}>Trung cấp</Text>
        </View>
        <PrimaryButton label="Tạo lộ trình cho tôi" onPress={() => navigation.navigate('Progress')} />
      </InformationCard>

      <InformationCard>
        <Text style={styles.heading}>Sẵn sàng cho</Text>
        <Text style={styles.heading}>10 phút hôm nay?</Text>
        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Tuần này</Text>
          <View style={styles.progressRow}>
            <Text style={styles.progressText}>3 / 5 buổi</Text>
            <Text style={styles.progressText}>60%</Text>
          </View>
          <View style={styles.progressBar}><View style={styles.progressFill} /></View>
        </View>
        <View style={styles.lessonBox}>
          <Text style={styles.lessonTitle}>IT English</Text>
          <Text style={styles.lessonSub}>Daily Stand-up Meeting</Text>
        </View>
        <PrimaryButton label="Tiếp tục học" onPress={() => navigation.navigate('DailyStandup')} />
        <TouchableOpacity style={styles.lessonSmall} onPress={() => navigation.navigate('Pronunciation')}>
          <Text style={styles.lessonSmallText}>Luyện phát âm</Text>
          <Text style={styles.lessonSmallArrow}>›</Text>
        </TouchableOpacity>
      </InformationCard>

      <BottomNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: 340,
    padding: 18,
    backgroundColor: '#f5f7f8',
    borderRadius: 28,
    marginBottom: 18,
    alignSelf: 'center',
  },
  title: { fontSize: 26, fontWeight: '700', color: '#22313d', lineHeight: 32 },
  muted: { color: '#5f6e7a', fontSize: 12, lineHeight: 18, marginTop: 8, marginBottom: 14 },
  mockupBox: { height: 140, backgroundColor: '#dfe8ea', borderRadius: 18, marginTop: 18, marginBottom: 12 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  tag: { backgroundColor: '#fff', borderColor: '#dfe7ea', borderWidth: 1, borderRadius: 12, paddingVertical: 8, paddingHorizontal: 10, marginRight: 8, marginBottom: 8 },
  tagSoft: { backgroundColor: '#ecf7f6', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 10, marginRight: 8, marginBottom: 8 },
  heading: { fontSize: 24, fontWeight: '700', color: '#22313d', lineHeight: 30 },
  progressCard: { marginTop: 18, backgroundColor: '#edf7f3', borderRadius: 16, padding: 12 },
  progressLabel: { color: '#58707d', fontSize: 12 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 10 },
  progressText: { color: '#22313d', fontWeight: '700' },
  progressBar: { height: 8, backgroundColor: '#d8efeb', borderRadius: 6, overflow: 'hidden' },
  progressFill: { width: '60%', height: '100%', backgroundColor: '#1bb39f', borderRadius: 6 },
  lessonBox: { marginTop: 18, backgroundColor: '#edf7f3', borderRadius: 16, padding: 12 },
  lessonTitle: { color: '#22313d', fontWeight: '700' },
  lessonSub: { color: '#4b5d6a', marginTop: 4 },
  lessonSmall: { marginTop: 14, backgroundColor: '#edf7f3', padding: 12, borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between' },
  lessonSmallText: { color: '#22313d', fontWeight: '700' },
  lessonSmallArrow: { color: '#22313d', fontWeight: '700' },
});

const styles = StyleSheet.create({
  screen: { width: 320, padding: 18, backgroundColor: '#f5f7f8', borderRadius: 28, marginBottom: 18 },
  title: { fontSize: 26, fontWeight: '700', color: '#22313d', lineHeight: 32 },
  muted: { color: '#5f6e7a', fontSize: 12, lineHeight: 18, marginTop: 8, marginBottom: 14 },
  mockupBox: { height: 140, backgroundColor: '#dfe8ea', borderRadius: 18, marginTop: 18, marginBottom: 12 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  tag: { backgroundColor: '#fff', borderColor: '#dfe7ea', borderWidth: 1, borderRadius: 12, paddingVertical: 8, paddingHorizontal: 10, marginRight: 8, marginBottom: 8 },
  tagSoft: { backgroundColor: '#ecf7f6', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 10, marginRight: 8, marginBottom: 8 },
  heading: { fontSize: 24, fontWeight: '700', color: '#22313d', lineHeight: 30 },
  progressCard: { marginTop: 18, backgroundColor: '#edf7f3', borderRadius: 16, padding: 12 },
  progressLabel: { color: '#58707d', fontSize: 12 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, marginBottom: 10 },
  progressText: { color: '#22313d', fontWeight: '700' },
  progressBar: { height: 8, backgroundColor: '#d8efeb', borderRadius: 6, overflow: 'hidden' },
  progressFill: { width: '60%', height: '100%', backgroundColor: '#1bb39f', borderRadius: 6 },
  lessonBox: { marginTop: 18, backgroundColor: '#edf7f3', borderRadius: 16, padding: 12 },
  lessonTitle: { color: '#22313d', fontWeight: '700' },
  lessonSub: { color: '#4b5d6a', marginTop: 4 },
  lessonSmall: { marginTop: 14, backgroundColor: '#edf7f3', padding: 12, borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between' },
});
