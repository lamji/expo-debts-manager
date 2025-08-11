import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    monthTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    weekdaysContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    weekdayText: {
      color: '#888',
      fontWeight: 'bold',
    },
    daysContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    dayButton: {
      width: '14.28%',
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
    },
    dayText: {
      color: '#000',
    },
    selectedDay: {
      backgroundColor: '#03264cff',
      borderRadius: 50,
    },
    selectedDayText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    outsideMonthDay: {
      opacity: 0.3,
    },
    outsideMonthText: {
      color: '#888',
    },
  });
};

export default useStyles;
