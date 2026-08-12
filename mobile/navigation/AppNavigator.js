import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DailyStandupScreen } from '../screens/DailyStandupScreen';
import { PronunciationScreen } from '../screens/PronunciationScreen';
import { MeetingScreen } from '../screens/MeetingScreen';
import { ProgressScreen } from '../screens/ProgressScreen';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyStandup" component={DailyStandupScreen} />
        <Stack.Screen name="Pronunciation" component={PronunciationScreen} />
        <Stack.Screen name="Meeting" component={MeetingScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
