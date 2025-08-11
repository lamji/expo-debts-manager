import { useState } from 'react';
import { ListItem } from '../../components/Playlist';
import { ButtonConfig } from '../../components/ButtonToggle';
import useTheme from '../../hooks/useTheme';
import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface DebtData {
  totalDebt: number;
  activeLoanCount: number;
  closedLoanCount: number;
}

const useViewModel = () => {
  const theme = useTheme();
  const [activeButtons, setActiveButtons] = React.useState<string[]>(['active']);
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      status: 'up-to-date',
      amount: '₱100.00',
      dueDate: '2023-10-01',
      monthlyDue: '₱100.00',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      status: 'upcoming-due',
      amount: '₱200.00',
      dueDate: '2023-10-05',
      monthlyDue: '₱500.00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      status: 'overdue',
      amount: '₱300.00',
      dueDate: '2023-09-25',
      monthlyDue: '₱50.00',
    },
  ];

  const buttonConfigs: ButtonConfig[] = [
    {
      id: 'active',
      label: 'Active Loans',
      icon: 'card',
    },
    {
      id: 'closed',
      label: 'Closed Loans',
      icon: 'close-circle',
    },
    {
      id: 'up-to-date',
      label: 'Up to Date',
      icon: 'checkmark-circle',
      activeColor: theme.colors.primary,
    },
    {
      id: 'upcoming-due',
      label: 'Upcoming Due',
      icon: 'time',
      activeColor: theme.colors.warning,
    },
    {
      id: 'overdue',
      label: 'Overdue',
      icon: 'alert-circle',
      activeColor: 'red',
    },
  ];

  const filteredData = DATA.filter(
    item =>
      (activeButtons.includes('active') && item.status !== 'closed') ||
      (activeButtons.includes('closed') && item.status === 'closed') ||
      activeButtons.includes(item.status),
  );

  const handleToggle = (buttonId: any) => {
    if (buttonId[0] === 'active' || buttonId[0] === 'closed') {
      console.log('Button toggled:', buttonId);
      setActiveButtons(['active']);
      Alert.alert('Button toggled:');
    } else {
      setActiveButtons(buttonId);
    }
  };

  return {
    navigation,
    theme,
    buttonConfigs,
    activeButtons,
    setActiveButtons,
    filteredData,
    handleToggle,
  };
};

export default useViewModel;
