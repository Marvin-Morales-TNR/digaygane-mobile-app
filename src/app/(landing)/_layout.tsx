import { Stack } from 'expo-router';
import useAppLanguage from 'src/hooks/useAppLanguage';
import esCopies from 'src/data/landingCopies/login-screen-data-es.json';
import enCopies from 'src/data/landingCopies/login-screen-data-en.json';
import React, { useCallback, useEffect } from 'react';
import useLandingStore from 'src/store/landingStore';
import { readDataAsync } from 'src/utils';
import { LandingStoreInterface } from 'src/interfaces/landingStoreInterface';
import LanguageDropDown from 'src/components/LanguageDropDown';

export default function LandingLayout() {
    const { changeLanguage } = useLandingStore();
    const currentLang = useLandingStore((state: LandingStoreInterface) => state.currentLang);
    const tanslationsLogin = useAppLanguage({ es: esCopies, en: enCopies }, currentLang);
   
    const updateCurrentLang = useCallback((code: number) => {
        changeLanguage(code);
    }, [changeLanguage]);

    const retrieveCurrentLang = useCallback(async () => {
        const code = await readDataAsync('landing-lang');
        if (code) updateCurrentLang(Number(code));
    }, [updateCurrentLang, readDataAsync]);

    useEffect(() => {
        retrieveCurrentLang();
    }, [retrieveCurrentLang]);

    return (
        <Stack 
            screenOptions={{ 
                animation: 'ios', 
                headerTitleAlign: 'center', 
                headerTransparent: true,
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="HomeScreen" options={{ 
                headerTransparent: true, 
                headerTintColor: 'white',
                headerTitle: '',
                headerLeft: () => <LanguageDropDown 
                    currentLang={currentLang} 
                    updateCurrentLang={updateCurrentLang} 
                />,
            }} />
            <Stack.Screen name="LoginScreen" options={{ title: tanslationsLogin.t('title'), headerTintColor: 'white' }} />
            <Stack.Screen name="RegisterScreen" options={{ headerTransparent: false }} />
        </Stack>
    );
}