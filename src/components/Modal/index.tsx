import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Modal, Text, Button, MD3Colors } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { MaterialCommunityIcons as IconType } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

const theme = useTheme();

interface AlertModalProps {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: keyof typeof IconType.glyphMap;
}

const AlertModal: React.FC<AlertModalProps> = ({
  visible,
  onDismiss,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'OK',
  cancelText = 'Cancel',
  icon = 'alert-circle-outline',
}) => {
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 12,
    alignSelf: 'center' as const,
    width: '85%',
    maxWidth: 400,
  } as const;

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={containerStyle}
      style={styles.modalContainer}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={icon} size={40} color={MD3Colors.error50} />
        </View>

        <Text variant="titleLarge" style={styles.title}>
          {title}
        </Text>

        <Text variant="bodyMedium" style={styles.message}>
          {message}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            mode="outlined"
            onPress={onDismiss}
            style={styles.button}
            labelStyle={styles.cancelButtonLabel}
          >
            {cancelText}
          </Button>
          <Button
            mode="contained"
            onPress={onConfirm}
            style={[styles.button, styles.confirmButton]}
            labelStyle={styles.buttonLabel}
          >
            {confirmText}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    marginBottom: 24,
    textAlign: 'center',
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    borderColor: theme.colors.delete,
  },
  confirmButton: {
    backgroundColor: theme.colors.primary,
  },
  buttonLabel: {
    fontSize: 16,
    paddingVertical: 2,
  },
  cancelButtonLabel: {
    color: theme.colors.delete,
    fontSize: 16,
    paddingVertical: 2,
  },
});

export default AlertModal;
