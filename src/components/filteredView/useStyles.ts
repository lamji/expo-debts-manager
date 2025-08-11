import { Platform, StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      marginLeft: 5,
      fontSize: 16,
      color: 'black',
    },
    label: {
      textTransform: 'capitalize',
      width: '90%',
    },
    closeButton: {
      zIndex: 9999,
      marginLeft: -8,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
};

export default useStyles;
