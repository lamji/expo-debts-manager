/** @format */

import { Dimensions, Platform, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';

const screenHeight = Dimensions.get('window').height;
const theme = useTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  cardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
  },
  openCard: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    borderRadius: 10,
    width: '50%',
    position: 'relative',
    overflow: 'hidden',
  },
  openCardBackgroundIcon: {
    position: 'absolute',
    right: -20,
    bottom: -20,
    opacity: 0.2,
    zIndex: 0,
  },
  ClosedCard: {
    backgroundColor: '#E9E9E9',
    padding: 20,
    borderRadius: 10,
    width: '50%',
    overflow: 'hidden',
  },
  activeLoansTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  activeLoansTitleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  closeLoansTitleText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  activeLoanIcon: {
    marginRight: 8,
  },
  activeLoansTitleText2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 34,
  },
  closeLoansTitleText2: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontSize: 34,
  },
  activeLoanAmount: {
    fontWeight: 'bold',
    color: 'white',
  },
  closeLoanAmount: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
    color: theme.colors.background,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  closedButton: {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    borderRadius: 10,
  },
  activeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  filterWrapper: {
    marginVertical: 10,
  },
  legends: {
    fontWeight: 700,
    color: theme.colors.background,
  },
  legendWrapper: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  legendText: {
    color: theme.colors.background,
  },
});

export default styles;
