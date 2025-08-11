import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
      marginTop: 20,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    filteredViewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
  });
};

export default useStyles;
