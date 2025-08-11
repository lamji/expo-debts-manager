import { useState, useMemo } from 'react';
import { ListItem } from '../../components/Playlist';
import { isWithinInterval, startOfDay, endOfDay, format } from 'date-fns';

const useViewModel = () => {
  const [filter, setFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const transactionHistory: ListItem[] = [
    {
      id: '1',
      primary: 'Loan Repayment',
      secondary: 'Bank of America',
      amount: '-₱500.00',
      type: 'expense',
      icon: 'payment',
      date: new Date('2025-08-01'),
    },
    {
      id: '2',
      primary: 'Salary Deposit',
      secondary: 'Employer Inc.',
      amount: '+₱2,000.00',
      type: 'income',
      icon: 'account-balance',
      date: new Date('2025-08-02'),
    },
    {
      id: '3',
      primary: 'Grocery Shopping',
      secondary: 'Supermarket',
      amount: '-₱150.00',
      type: 'expense',
      icon: 'shopping-cart',
      date: new Date('2025-08-03'),
    },
    {
      id: '4',
      primary: 'Utility Bill',
      secondary: 'Electric Company',
      amount: '-₱300.00',
      type: 'expense',
      icon: 'electrical-services',
      date: new Date('2025-08-04'),
    },
    {
      id: '5',
      primary: 'Freelance Work',
      secondary: 'Client Project',
      amount: '+₱1,500.00',
      type: 'income',
      icon: 'work',
      date: new Date('2025-08-05'),
    },
    {
      id: '6',
      primary: 'Restaurant Dinner',
      secondary: 'Fine Dining',
      amount: '-₱250.00',
      type: 'expense',
      icon: 'restaurant',
      date: new Date('2025-08-06'),
    },
    {
      id: '7',
      primary: 'Investment Dividend',
      secondary: 'Stock Portfolio',
      amount: '+₱750.00',
      type: 'income',
      icon: 'trending-up',
      date: new Date('2025-08-07'),
    },
    {
      id: '8',
      primary: 'Phone Bill',
      secondary: 'Telecom Provider',
      amount: '-₱100.00',
      type: 'expense',
      icon: 'phone',
      date: new Date('2025-08-08'),
    },
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const filteredTransactions = useMemo(() => {
    let result = transactionHistory;

    if (filter !== 'all') {
      result = result.filter(transaction => transaction.type === filter);
    }

    if (selectedDate) {
      result = result.filter(
        transaction =>
          transaction.date &&
          isWithinInterval(transaction.date, {
            start: startOfDay(selectedDate),
            end: endOfDay(selectedDate),
          }),
      );
    }

    return result;
  }, [filter, transactionHistory, selectedDate]);

  function handleCalendarSelect() {
    setIsCalendarVisible(true);
  }

  const menuItems = [
    {
      title: 'Income',
      onPress: () => setFilter('income'),
      icon: 'cash',
    },
    {
      title: 'Expense',
      onPress: () => setFilter('expense'),
      icon: 'cash-fast',
    },
    {
      title: 'Date',
      onPress: () => handleCalendarSelect(),
      icon: 'calendar',
    },
  ];

  return {
    filter,
    setFilter,
    filteredTransactions,
    menuItems,
    handleDateSelect,
    selectedDate,
    isCalendarVisible,
    setIsCalendarVisible,
    setSelectedDate,
  };
};

export default useViewModel;
