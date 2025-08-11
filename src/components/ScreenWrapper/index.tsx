import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';

const theme = useTheme();

export default function ScreenWrapper({ children }: any) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
  },
});
