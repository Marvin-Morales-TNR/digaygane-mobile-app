import React from 'react';
import { Stack } from 'expo-router';
import AppProviders from 'src/AppProviders';

export default function RootLayout() {
    return (
        <AppProviders>
            <Stack initialRouteName='(landing)' screenOptions={{ animation: 'ios'}}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(landing)" options={{ headerShown: false }} />
            </Stack>
        </AppProviders>
    );
}