/** @format */

import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './useStyles';
import Playlist, { ListItem } from '../../components/Playlist';
import useViewModel from './useViewModel';
import { formatCurrencyPH } from '../../utils/formatCurrencyPH';

const theme = useTheme();

// Sample transaction history data
const transactionHistory: ListItem[] = [
  {
    id: '1',
    primary: 'Loan Repayment',
    secondary: 'Bank of America',
    amount: '-₱500.00',
    type: 'expense',
    icon: 'payment',
  },
  {
    id: '2',
    primary: 'Salary Deposit',
    secondary: 'Employer Inc.',
    amount: '+₱2,000.00',
    type: 'income',
    icon: 'account-balance',
  },
  {
    id: '3',
    primary: 'Grocery Shopping',
    secondary: 'Supermarket',
    amount: '-₱150.00',
    type: 'expense',
    icon: 'shopping-cart',
  },
  {
    id: '4',
    primary: 'Utility Bill',
    secondary: 'Electric Company',
    amount: '-₱300.00',
    type: 'expense',
    icon: 'electrical-services',
  },
];

export const HomeScreen = () => {
  const { data } = useViewModel();
  const navigation = useNavigation();

  return (
    <>
      {/* StatusBar now controlled by useFocusEffect */}
      <View style={styles.container}>
        <View style={styles.primaryView}>
          <View style={styles.walletHeader}>
            <View>
              <Text style={styles.balanceLabel}>Total Debt</Text>
              <Text style={styles.balanceAmount}>₱2,458.00</Text>
            </View>
            <View>
              <TouchableOpacity>
                <MaterialIcons name="notifications" size={26} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Progress bar */}
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBar}>
              <View
                style={{
                  width: '60%',
                  height: '100%',
                  backgroundColor: theme.colors.secondary,
                }}
              />
            </View>
            <Text style={{ color: '#fff', marginLeft: 10 }}>60%</Text>
          </View>
          {/* Total Remaining and total paid */}
          <View style={styles.progressBarWrapper}>
            <View>
              <Text style={styles.label}>Total Paid</Text>
              <Text style={{ color: '#fff' }}>₱1,458.00</Text>
            </View>
            <View>
              <Text style={styles.label}>Total Remaining</Text>
              <Text style={{ color: '#fff' }}>{formatCurrencyPH(1000)}</Text>
            </View>
          </View>

          {/* Quick Add debts button */}
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="add" size={24} color="#fff" />
            <Text style={styles.actionText}>Add Debts</Text>
          </TouchableOpacity>
        </View>

        {/* White Card View */}
        <View style={styles.whiteCard}>
          <View style={styles.transactionHeader}>
            <Text>Transaction History</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => navigation.navigate('Transactions' as never)}
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <Playlist data={transactionHistory} />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
