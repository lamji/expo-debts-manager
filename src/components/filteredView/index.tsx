import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from './useStyles';
import { Ionicons } from '@expo/vector-icons';
import useViewModel from './useViewModel';

export type FilteredViewProps = {
  handleClear?: () => void;
  filtered: string;
  type?: 'date' | 'text';
  onDatePress?: () => void;
};

export default function FilteredView(props: FilteredViewProps) {
  const { handleClear } = useViewModel(props);
  return (
    <View style={useStyles().container}>
      {props.type === 'date' ? (
        <TouchableOpacity onPress={props.onDatePress} style={useStyles().wrapper}>
          <Text style={useStyles().label}>{props?.filtered}</Text>
          <TouchableOpacity onPress={handleClear} style={useStyles().closeButton}>
            <Ionicons name="close" size={24} color="gray" />
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <>
          <Text style={useStyles().label}>{props?.filtered}</Text>
          <TouchableOpacity onPress={handleClear} style={useStyles().closeButton}>
            <Ionicons name="close" size={24} color="gray" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
