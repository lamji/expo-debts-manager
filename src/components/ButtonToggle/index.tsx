import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';

// Button configuration interface
export interface ButtonConfig {
  id: string;
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  activeColor?: string;
  inactiveColor?: string;
}

interface ButtonToggleProps {
  buttons: ButtonConfig[];
  onToggle?: (selectedIds: string[]) => void;
  multiSelect?: boolean;
  initialActiveIds?: string[];
}

export const ButtonToggle: React.FC<ButtonToggleProps> = ({
  buttons,
  onToggle,
  multiSelect = false,
  initialActiveIds = [],
}) => {
  const theme = useTheme();
  const [activeIds, setActiveIds] = useState<string[]>(initialActiveIds);

  const handleToggle = (buttonId: string) => {
    let newActiveIds: string[];

    if (multiSelect) {
      newActiveIds = activeIds.includes(buttonId)
        ? activeIds.filter(id => id !== buttonId)
        : [...activeIds, buttonId];
    } else {
      newActiveIds = [buttonId];
    }

    setActiveIds(newActiveIds);
    onToggle?.(newActiveIds);
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
    },
    buttonWrapper: {
      flexDirection: 'row',
      gap: 10,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      gap: 5,
    },
    buttonText: {
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonWrapper}
      >
        {buttons.map(button => {
          const isActive = activeIds.includes(button.id);
          const backgroundColor = isActive
            ? button.activeColor || theme.colors.primary
            : button.inactiveColor || theme.colors.background;
          const textColor = isActive ? theme.colors.background : theme.colors.text;

          return (
            <TouchableOpacity
              key={button.id}
              style={[styles.button, { backgroundColor }]}
              onPress={() => handleToggle(button.id)}
            >
              {button.icon && <Ionicons name={button.icon} size={20} color={textColor} />}
              <Text style={[styles.buttonText, { color: textColor }]}>{button.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
