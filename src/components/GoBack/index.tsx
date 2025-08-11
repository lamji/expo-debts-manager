import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useStyles from './useStyles';
import useViewModel from './useViewModel';

const GoBack = ({ title }: { title: string }) => {
  const styles = useStyles();
  const { handleGoBack } = useViewModel();

  console.log('GoBack component rendered', title);

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoBack}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GoBack;
