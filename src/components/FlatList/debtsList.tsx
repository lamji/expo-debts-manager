import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import useTheme from '../../hooks/useTheme';
import moment from 'moment';
import { getStatusColor } from '../../utils/statusMapper';

const theme = useTheme();

export type ItemProps = {
  data: any;
  navigation: any;
};

export const ItemDebts = ({ data, navigation }: ItemProps) => {
  const handleTouch = () => {
    Alert.alert(data.id);
    navigation.navigate('LoanDetails' as never);
  };
  return (
    <TouchableOpacity
      onPress={handleTouch}
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
          <Ionicons name="business-outline" size={34} color={getStatusColor(data?.status)} />
          <View>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.secondary}>Due: {moment(data?.dueDate).format('ll')}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.amountLabel}>{data?.amount}</Text>
          <Text style={styles.secondary}>Monthly Due: {data?.monthlyDue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderLeftWidth: 4,

    borderBottomWidth: 1,
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
});
