import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import useTheme from '../../hooks/useTheme';
import moment from 'moment';
import { getStatusColor } from '../../utils/statusMapper';
import { useEffect, useState } from 'react';

const theme = useTheme();

export type ItemProps = {
  data: any;
  onPress: (id: string) => void;
};

export const LoanList = ({ data, onPress }: ItemProps) => {
  const [isPaid, setIsPaid] = useState(false);
  const handleTouch = () => {
    onPress(data.id);
  };

  useEffect(() => {
    if (data.status === 'paid') {
      setIsPaid(true);
    } else {
      setIsPaid(false);
    }
  }, [data.status]);

  return (
    <View
      style={[
        styles.item,
        {
          borderLeftColor: getStatusColor(data?.status),
          borderBottomColor: getStatusColor(data?.status),
        },
      ]}
    >
      <View style={[styles.listWrapper]}>
        <View style={styles.lefteWrapper}>
          <View>
            <Text style={[styles.title, { color: isPaid ? 'gray' : '' }]}>{data?.monthlyDue}</Text>
            <Text style={styles.secondary}>Due: {moment(data?.dueDate).format('ll')}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.payWrapper}
            disabled={data.status === 'paid' ? true : false}
            onPress={handleTouch}
          >
            <Ionicons
              name={isPaid ? 'checkmark-circle-outline' : 'wallet-outline'}
              size={24}
              color={isPaid ? 'green' : theme.colors.primary}
            />
            {isPaid ? <Text>PAID</Text> : <Text>PAY</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,

    borderLeftWidth: 4,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  amountLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'right',
  },
  listWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  secondary: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  lefteWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  payWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
