import React from 'react';
import { View, Text } from 'react-native';

import FilterMenu from '../../components/FilterMenu';
import GoBack from '../../components/GoBack';
import Playlist from '../../components/Playlist';
import CalendarPicker from '../../components/CalendarPicker';
import useStyles from './useStyles';
import useViewModel from './useViewModel';
import FilteredView from '../../components/filteredView';
import moment from 'moment';

export const TransactionsScreen = () => {
  const styles = useStyles();
  const {
    filteredTransactions,
    menuItems,
    handleDateSelect,
    isCalendarVisible,
    setIsCalendarVisible,
    filter,
    setFilter,
    selectedDate,
    setSelectedDate,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <GoBack title="Transactions" />

      <View style={styles.wrapper}>
        <FilterMenu menuItems={menuItems} />
        <CalendarPicker
          visible={isCalendarVisible}
          onClose={() => setIsCalendarVisible(false)}
          onDateSelect={handleDateSelect}
        />
        <View style={styles.filteredViewContainer}>
          {filter !== 'all' && (
            <FilteredView filtered={filter} handleClear={() => setFilter('all')} />
          )}
          {selectedDate && (
            <FilteredView
              filtered={moment(selectedDate).format('l')}
              handleClear={() => setSelectedDate(null)}
              type="date"
              onDatePress={() => setIsCalendarVisible(true)}
            />
          )}
        </View>

        <Playlist data={filteredTransactions} />
      </View>
    </View>
  );
};

export default TransactionsScreen;
