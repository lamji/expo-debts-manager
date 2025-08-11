import { StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const theme = useTheme();

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: theme.colors.primary,
    padding: 20,
    marginVertical: 20,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.background,
  },
  BackgroundIcon: {
    position: 'absolute',
    right: 20,
    bottom: 0,
    opacity: 0.1,
    zIndex: 0,
    top: 20,
  },
  addButtonWrapper: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountWrapper: {
    marginVertical: 20,
  },
  amount: {
    fontWeight: 700,
    fontSize: 26,
    color: theme.colors.background,
  },
  amountLabel: {
    color: theme.colors.background,
  },
  paid: {
    color: theme.colors.background,
    textAlign: 'right',
    fontWeight: 700,
  },
  listBackground: {
    // backgroundColor: '#f6f6f6ff',
    borderColor: '#f6f6f6ff',
    borderWidth: 0,
    borderRadius: 10,
  },
  actionButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    width: '22%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 12,
  },
  bottomCardItemsWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  BottomCardItemsLabel: {
    fontSize: 12,
    color: theme.colors.background,
  },
  subHeader: {
    fontSize: 10,
    color: theme.colors.background,
  },
  paidWrapper: {
    textAlign: 'right',
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusLabel: {
    fontSize: theme.fonts.small,
    fontWeight: 700,
    color: theme.colors.background,
    marginRight: 5,
  },
  status: {
    textTransform: 'uppercase',
    fontSize: theme.fonts.small,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
});

export default styles;
