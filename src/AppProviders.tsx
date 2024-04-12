import React from 'react';
import TNRTheme from 'src/styles/theme';

import { PaperProvider } from 'react-native-paper';
import { ReactChildrenProps } from './interfaces';

export default function AppProviders({ 
    children 
}: ReactChildrenProps) {
    return (
        <PaperProvider theme={TNRTheme}>
            { children }
        </PaperProvider>
    );
}