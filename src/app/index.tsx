import React, { useCallback, useEffect, useState } from 'react';
import { Redirect, useFocusEffect } from 'expo-router';
import { Animated, Image, StyleSheet, View } from 'react-native';
import logo from 'assets/images/logo.png';
import { readDataAsync } from 'src/utils';

export default function RootIndex() {
    const [loginRedirection, setLoginRedirection] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const splashOpacity = new Animated.Value(1);

    const checkIfLoggedOutUser = useCallback(async () => {
        const hasLangSelected = await readDataAsync('home-screen-not-shown2');
        if (hasLangSelected) setLoginRedirection(true);
        return;
    }, []);

    useFocusEffect(() => {
        checkIfLoggedOutUser();
    });

    useEffect(() => {
        setTimeout(() => {
            setShowSplash(false);
        }, 5000); // Tiempo de espera antes de ocultar la pantalla de presentación
    }, []);

    useEffect(() => {
        if (!showSplash) {
            Animated.timing(splashOpacity, {
                toValue: 0,
                duration: 500, // Duración de la animación de desvanecimiento
                useNativeDriver: true,
            }).start();
        }
    }, [showSplash]);

    if (showSplash) {
        return (
            <Animated.View style={[styles.container, { opacity: splashOpacity }]}>
                <View className='flex items-center justify-center w-[50%] h-[30px]'>
                    <Image resizeMode='contain' className='w-full' source={logo} />
                </View>
            </Animated.View>
        );
    }

    if (loginRedirection) return <Redirect href="/LoginScreen" />;
    return <Redirect href="(landing)" />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Cambia el color de fondo según sea necesario
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});