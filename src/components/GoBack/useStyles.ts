import { Platform, StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 20 : 30,
    },
    text: {
      marginLeft: 5,
      fontSize: 16,
      color: 'black',
    },
  });
};

export default useStyles;
