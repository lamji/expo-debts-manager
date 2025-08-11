export type DueStatus = 'upcoming' | 'overdue' | 'upToDate';

export interface DueStatusOptions {
  upcomingThresholdDays?: number; // Days before due date to consider "upcoming"
  currentDate?: string; // Override current date for testing
}

/**
 * Determines if an item is upcoming due, overdue, or up to date
 * @param dueDateString - The due date as a string (ISO format recommended: YYYY-MM-DD or YYYY-MM-DDTHH:mm:ss)
 * @param options - Optional configuration
 * @returns DueStatus - 'upcoming', 'overdue', or 'upToDate'
 * @throws Error if the date string is invalid
 */
export function getDueStatus(dueDateString: string, options: DueStatusOptions = {}): DueStatus {
  const { upcomingThresholdDays = 5, currentDate } = options;

  // Parse the due date
  const dueDate = new Date(dueDateString);

  // Validate the parsed date
  if (isNaN(dueDate.getTime())) {
    throw new Error(`Invalid date string: ${dueDateString}`);
  }

  // Get current date (use provided date for testing or actual current date)
  const now = currentDate ? new Date(currentDate) : new Date();

  // Normalize dates to start of day for comparison (removes time component)
  const dueDateNormalized = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
  const nowNormalized = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // Calculate difference in days
  const diffInMs = dueDateNormalized.getTime() - nowNormalized.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  // Determine status
  if (diffInDays < 0) {
    return 'overdue';
  } else if (diffInDays <= upcomingThresholdDays) {
    return 'upcoming';
  } else {
    return 'upToDate';
  }
}

/**
 * Batch process multiple due dates
 * @param dueDates - Array of due date strings
 * @param options - Optional configuration
 * @returns Array of objects with original date string and status
 */
export function getDueStatusBatch(
  dueDates: string[],
  options: DueStatusOptions = {},
): Array<{ dateString: string; status: DueStatus; error?: string }> {
  return dueDates.map(dateString => {
    try {
      const status = getDueStatus(dateString, options);
      return { dateString, status };
    } catch (error) {
      return {
        dateString,
        status: 'upToDate' as DueStatus,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  });
}

// Example usage:
/*
// Basic usage
const status1 = getDueStatus('2024-12-25'); // Christmas
const status2 = getDueStatus('2024-08-05'); // Past date
const status3 = getDueStatus('2024-08-15'); // Near future

// With custom options
const status4 = getDueStatus('2024-08-20', { upcomingThresholdDays: 14 });

// Batch processing
const dates = ['2024-12-25', '2024-08-05', '2024-08-15'];
const statuses = getDueStatusBatch(dates);

console.log('Christmas status:', status1); // 'upToDate'
console.log('Past date status:', status2); // 'overdue'
console.log('Near future status:', status3); // 'upcoming'
console.log('Batch results:', statuses);
*/
