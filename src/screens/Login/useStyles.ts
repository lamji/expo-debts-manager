import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const theme = useTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
});

export default styles;
