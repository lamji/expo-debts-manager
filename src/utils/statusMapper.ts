import useTheme from '../hooks/useTheme';

const theme = useTheme();

/**
 * Maps status values to human-readable or formatted representations
 * @param status The input status to be mapped
 * @returns Formatted or interpreted status
 */
export const mapStatusToDisplay = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'Pending';
    case 'completed':
      return 'Completed';
    case 'in_progress':
      return 'In Progress';
    case 'overdue':
      return 'Overdue';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status; // Return original status if no match
  }
};

/**
 * Determines the color associated with a given status
 * @param status The input status to get color for. Available options:
 *               - 'up-to-date' - Returns theme.colors.primary (Orange)
 *               - 'up-to-date-active' - Returns theme.colors.primary (Orange)
 *               - 'upcoming-due' - Returns theme.colors.warning (Green)
 *               - 'overdue' - Returns 'red' (Dodger Blue)
 *               - Any other value returns '#000000' (Black)
 * @returns Color hex code or theme color string representation
 */
export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'up-to-date':
      return theme.colors.primary; // Orange
    case 'up-to-date-active':
      return '#00809D'; // Orange
    case 'upcoming-due':
      return theme.colors.warning; // Green
    case 'overdue':
      return 'red'; // Dodger Blue
    default:
      return '#000000'; // Black as default
  }
};

/**
 * Determines the color associated with a given status
 * @param status The input status to get color for. Available options:
 *               - 'up-to-date' - Returns theme.colors.primary (Orange)
 *               - 'up-to-date-active' - Returns theme.colors.primary (Orange)
 *               - 'upcoming-due' - Returns theme.colors.warning (Green)
 *               - 'overdue' - Returns 'red' (Dodger Blue)
 *               - Any other value returns '#000000' (Black)
 * @returns Color hex code or theme color string representation
 */
export const getStatusColorWithColor = (status: string): { bg: string; color: string } => {
  switch (status.toLowerCase()) {
    case 'up-to-date':
      return {
        bg: theme.colors.primary,
        color: 'white',
      }; // Orange
    case 'up-to-date-active':
      return {
        bg: '#00809D',
        color: 'white',
      }; // Orange
    case 'upcoming-due':
      return {
        bg: theme.colors.warning,
        color: 'black',
      }; // Green
    case 'overdue':
      return {
        bg: 'red',
        color: 'white',
      }; // Dodger Blue
    default:
      return {
        bg: '#000000',
        color: 'white',
      }; // Black as default
  }
};
