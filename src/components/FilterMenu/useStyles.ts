import { StyleSheet } from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      width: '35%',
      padding: 10,
      height: 42,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 15,
      marginRight: 10,
    },
    menuContent: {
      backgroundColor: 'white',
      marginTop: 50,
      borderRadius: 8,
      padding: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 2,
    },
  });
};

export default useStyles;
