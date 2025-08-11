import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';
import GoBack from '../../components/GoBack';
import styles from './useStyles';
import { Ionicons } from '@expo/vector-icons';
import { formatCurrencyPH } from '../../utils/formatCurrencyPH';
import useViewModel from './useViewModel';
import { getStatusColorWithColor } from '../../utils/statusMapper';
import FilterMenu from '../../components/FilterMenu';
import { LoanList } from '../../components/FlatList/LoanList';
import AlertModal from '../../components/Modal';

export default function LoanDetails() {
  const {
    theme,
    manageButton,
    menuItems,
    handlePress,
    DATA,
    handleConfirm,
    modalVisible,
    setModalVisible,
    alertMessage,
  } = useViewModel();
  const ListHeader = () => (
    <>
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Ionicons style={styles.BackgroundIcon} name="accessibility" size={250} color="white" />
          <View style={styles.headWrapper}>
            <View>
              <View>
                <Text style={styles.header}>BDO Loan</Text>
                <Text style={styles.subHeader}>Start Date: 10/25/2025</Text>
              </View>
              <View style={styles.amountWrapper}>
                <Text style={styles.amountLabel}>Loan Amount</Text>
                <Text style={styles.amount}>{formatCurrencyPH(13970.1)}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.paid}>10% Paid</Text>
              <Text style={styles.subHeader}>{formatCurrencyPH(30500)} total paid</Text>
            </View>
          </View>
          <View style={styles.bottomCardItemsWrapper}>
            <View>
              <Text style={styles.BottomCardItemsLabel}>Due Date: 10/25/2025</Text>
              <View style={styles.statusWrapper}>
                <Text style={styles.statusLabel}>Status</Text>
                <Text
                  style={[
                    styles.status,
                    {
                      backgroundColor: getStatusColorWithColor('up-to-date-active').bg,
                      color: getStatusColorWithColor('up-to-date-active').color,
                    },
                  ]}
                >
                  UP TO DATE
                </Text>
              </View>
            </View>

            <Text style={styles.BottomCardItemsLabel}>Amount Due: {formatCurrencyPH(3288)}</Text>
          </View>
        </View>
      </View>
      <View style={styles.listBackground}>
        <Text>Manage</Text>
        <View style={styles.actionButtonWrapper}>
          {manageButton.map(data => {
            return (
              <TouchableOpacity
                key={data.key}
                style={styles.button}
                onPress={() => data.onPress(data.key)}
              >
                <Ionicons name={data.icon} size={20} color={theme.colors.primary} />
                <Text style={styles.buttonLabel}>{data.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <FilterMenu menuItems={menuItems} />
    </>
  );

  return (
    <ScreenWrapper>
      <GoBack title="Loan Details" />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <LoanList data={item} onPress={(id: string) => handlePress(id)} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
      />
      <AlertModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        onConfirm={handleConfirm}
        title="Confirm Action"
        message={alertMessage}
      />
    </ScreenWrapper>
  );
}
