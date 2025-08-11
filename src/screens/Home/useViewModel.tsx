import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

export default function useViewModel() {
  // Dynamic StatusBar based on screen focus
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      return () => {
        StatusBar.setBarStyle('dark-content');
      };
    }, []),
  );
  return {
    data: '',
  };
}
