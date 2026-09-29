import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const FocusScreen = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && time > 0) interval = setInterval(() => setTime(t => t - 1), 1000);
    else if (time === 0) setIsActive(false);
    return () => clearInterval(interval);
  }, [isActive, time]);

  const format = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NeuroFlow Lock</Text>
      <View style={[styles.timerRing, isActive && styles.activeRing]}>
        <Text style={styles.timerText}>{format(time)}</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => setIsActive(!isActive)}>
        <Text style={styles.btnText}>{isActive ? 'BREAK LOCK' : 'INITIATE DEEP WORK'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#09090b', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#a1a1aa', fontSize: 18, letterSpacing: 2, marginBottom: 40, fontWeight: 'bold' },
  timerRing: { width: 280, height: 280, borderRadius: 140, borderWidth: 4, borderColor: '#27272a', alignItems: 'center', justifyContent: 'center', marginBottom: 40 },
  activeRing: { borderColor: '#8b5cf6', shadowColor: '#8b5cf6', shadowOpacity: 0.5, shadowRadius: 30, elevation: 10 },
  timerText: { color: '#fff', fontSize: 64, fontWeight: '900' },
  btn: { backgroundColor: '#8b5cf6', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 30 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16, letterSpacing: 1 }
});