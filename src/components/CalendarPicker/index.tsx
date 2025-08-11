import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { isSameDay, isSameMonth } from 'date-fns';
import { Ionicons } from '@expo/vector-icons';

import useStyles from './useStyles';
import useViewModel from './useViewModel';

type Props = {
  visible: boolean;
  onClose: () => void;
  onDateSelect?: (date: Date) => void;
};

const CalendarPicker: React.FC<Props> = ({ visible, onClose, onDateSelect }) => {
  const styles = useStyles();
  const {
    currentDate,
    selectedDate,
    daysOfWeek,
    daysInMonth,
    handlePrevMonth,
    handleNextMonth,
    handleDatePress,
    format,
  } = useViewModel();

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={onClose}>
        <TouchableOpacity
          style={styles.modalContent}
          activeOpacity={1}
          onPress={e => e.stopPropagation()}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={handlePrevMonth}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.monthTitle}>{format(currentDate, 'MMMM yyyy')}</Text>
            <TouchableOpacity onPress={handleNextMonth}>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.weekdaysContainer}>
            {daysOfWeek.map(day => (
              <Text key={day} style={styles.weekdayText}>
                {day}
              </Text>
            ))}
          </View>
          <View style={styles.daysContainer}>
            {daysInMonth.map((day, index) => {
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const isCurrentMonth = isSameMonth(day, currentDate);

              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dayButton,
                    isSelected && styles.selectedDay,
                    !isCurrentMonth && styles.outsideMonthDay,
                  ]}
                  onPress={() => {
                    handleDatePress(day);
                    onDateSelect?.(day);
                    onClose();
                  }}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isSelected && styles.selectedDayText,
                      !isCurrentMonth && styles.outsideMonthText,
                    ]}
                  >
                    {format(day, 'd')}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default CalendarPicker;
