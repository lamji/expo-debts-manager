/** @format */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './useStyles';
import useViewModel from './useViewModel';
import { ItemDebts } from '../../components/FlatList/debtsList';
import { ButtonToggle } from '../../components/ButtonToggle';

export const DebtsScreen = () => {
  const { theme, buttonConfigs, navigation, filteredData, handleToggle } = useViewModel();

  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.openCard}>
          <Ionicons
            name="card-outline"
            size={100}
            color="white"
            style={styles.openCardBackgroundIcon}
          />
          <View style={styles.activeLoansTitleContainer}>
            <Text style={styles.activeLoansTitleText}>Active Loans</Text>
            <Ionicons name="radio-outline" size={24} color="white" style={styles.activeLoanIcon} />
          </View>
          <Text style={styles.activeLoansTitleText2}>5</Text>
          <Text style={styles.activeLoanAmount}>₱10,000</Text>
        </View>
        <View style={styles.ClosedCard}>
          <Ionicons
            name="medal-outline"
            size={100}
            color="#9e9d96ff"
            style={styles.openCardBackgroundIcon}
          />
          <View style={styles.activeLoansTitleContainer}>
            <Text style={styles.closeLoansTitleText}>Closed Loans</Text>
            <Ionicons
              name="radio-outline"
              size={24}
              color={theme.colors.primary}
              style={styles.activeLoanIcon}
            />
          </View>
          <Text style={styles.closeLoansTitleText2}>5</Text>
          <Text style={styles.closeLoanAmount}>₱10,000</Text>
        </View>
      </View>
      <View style={styles.legendWrapper}>
        <Text style={styles.legends}>Legends</Text>
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: theme.colors.primary }]} />
            <Text style={styles.legendText}>Up to Date</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: theme.colors.warning }]} />
            <Text style={styles.legendText}>Upcoming Due</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: 'red' }]} />
            <Text style={styles.legendText}>Overdue</Text>
          </View>
        </View>
      </View>

      <Text style={styles.legends}>Filters</Text>
      <View style={styles.filterWrapper}>
        <ButtonToggle
          buttons={buttonConfigs}
          multiSelect={false}
          initialActiveIds={['active']}
          onToggle={selectedIds => handleToggle(selectedIds)}
        />
      </View>

      {/* List */}
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <ItemDebts data={item} navigation={navigation} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DebtsScreen;
