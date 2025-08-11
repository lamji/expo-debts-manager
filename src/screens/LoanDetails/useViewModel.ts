import { Alert } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function useViewModel() {
  const theme = useTheme();
  const [filter, setFilter] = useState('paid');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigation = useNavigation();

  const manageButton = [
    {
      label: 'Pay',
      icon: 'wallet' as any,
      key: 'pay',
      onPress: (key: string) => Alert.alert(key),
    },
    {
      label: 'Edit',
      icon: 'pencil' as any,
      key: 'edit',
      onPress: (key: string) => Alert.alert(key),
    },
    {
      label: 'Delete',
      icon: 'trash' as any,
      key: 'delete',
      onPress: (key: string) => Alert.alert(key),
    },
    {
      label: 'Close',
      icon: 'close' as any,
      key: 'close',
      onPress: (key: string) => Alert.alert(key),
    },
  ];

  const menuItems = [
    {
      title: 'Paid',
      onPress: () => setFilter('paid'),
      icon: 'cash',
    },
    {
      title: 'Unpaid',
      onPress: () => setFilter('unpaid'),
      icon: 'wallet',
    },
  ];

  const DATA = [
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d70',
      title: 'Third Item',
      status: 'paid',
      amount: '₱300.00',
      dueDate: '2023-09-25',
      monthlyDue: '₱50.00',
    },
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

  /**
   * Functions
   */
  const handlePress = (id: string) => {
    setAlertMessage(`Are you sure you want to pay this due ${new Date()} ?`);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    // Handle confirmation action
    setModalVisible(false);
  };

  return {
    theme,
    manageButton,
    menuItems,
    filter,
    setFilter,
    navigation,
    DATA,
    handlePress,
    handleConfirm,
    modalVisible,
    setModalVisible,
    alertMessage,
    setAlertMessage,
  };
}
