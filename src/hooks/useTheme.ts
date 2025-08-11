import { useCallback } from 'react';

export const palette = {
  sage: '#1860b8ff',
  mint: '#6da2e2ff',
  beige: '#D1D8BE',
  cream: 'white',
  text: '#2A4759',
  secondaryText: '#4C585B',
  warning: '#FFC107',
  active: '#010b16ff',
  delete: 'red',
} as const;

export type ThemeColors = typeof palette;

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    warning: string;
    active: string;
    delete: string;
  };
  fonts: {
    small: number;
  };
}

export const useTheme = (): Theme => {
  const theme = {
    colors: {
      primary: palette.sage,
      secondary: palette.mint,
      background: palette.cream,
      surface: palette.beige,
      text: palette.text,
      textSecondary: palette.secondaryText,
      warning: palette.warning,
      active: palette.active,
      delete: palette.delete,
    },
    fonts: {
      small: 10,
    },
  };

  return theme;
};

export default useTheme;
