/** @format */

import { Dimensions, Platform, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
Dimensions.get('window').height;
const screenHeight = Dimensions.get('window').height;
const theme = useTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  primaryView: {
    height: Platform.OS === 'ios' ? screenHeight * 0.4 : screenHeight * 0.3, // Take 50% of screen height
    width: '100%',
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
  walletHeader: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  actionButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '40%',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
  whiteCard: {
    flex: 3,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10,
    shadowColor: '#000',
    height: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewAllText: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  progressBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
