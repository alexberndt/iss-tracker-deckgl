// copied from https://github.com/20treeAI/explorer/tree/master/src/assets/styles
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from './theme';

export const withTheme = (Story: any) => (
  <ThemeProvider theme={lightTheme}>{Story()}</ThemeProvider>
);
