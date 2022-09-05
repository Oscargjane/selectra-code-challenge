import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary_100: '#D6E8FA',
    primary_200: '#98C6F4',
    primary_300: '#5AA3ED',
    primary_400: '#1C81E6',
    primary_500: '#135EA9',
    primary_600: '#105192',
    primary_700: '#0D4379',
    primary_800: '#0B3661',
    primary_900: '#082849',
    gray_50: '#F9FAFA',
    gray_100: '#F4F5F6',
    gray_200: '#E3E6E8',
    gray_300: '#CFD4D8',
    gray_400: '#9AA3AC',
    gray_500: '#627384',
    gray_600: '#3D5366',
    gray_700: '#304050',
    gray_800: '#152637',
    gray_900: '#0E1925',
    alert_50: '#FEF2F2',
    alert_100: '#FEE2E2',
    alert_200: '#FCA5A5',
    alert_300: '#EF4444',
    alert_400: '#B91C1C',
    alert_500: '#7F1D1D',
  },
  // Break Points
  bp: {
    large: '75em', // 1200px
    medium: '56.25em', // 900px
    small: '37.5em', // 600px
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
