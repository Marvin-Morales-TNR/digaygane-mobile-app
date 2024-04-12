import React, { useCallback } from 'react';
import { Text, View, TouchableHighlight, Image  } from 'react-native';
import enCopies from 'src/data/landingCopies/home-screen-data-en.json';
import esCopies from 'src/data/landingCopies/home-screen-data-es.json';
import esCopiesHome from 'src/data/landingCopies/home-screen-data-es.json';
import enCopiesHome from 'src/data/landingCopies/home-screen-data-en.json';
import useAppLanguage from 'src/hooks/useAppLanguage';
import useLandingStore from 'src/store/landingStore';
import { LandingStoreInterface } from 'src/interfaces/landingStoreInterface';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import banner1 from 'assets/images/banner1-01.png';

export default function HomeScreen() {
    const currentLang = useLandingStore((state: LandingStoreInterface) => state.currentLang);
    const translations = useAppLanguage({ es: esCopies, en: enCopies }, currentLang);
    const translationsHome = useAppLanguage({ es: esCopiesHome, en: enCopiesHome }, currentLang);

    const handleRedirectLogin = useCallback(() => {
        router.replace('/LoginScreen');
    }, []);

    const handleRedirectRegister = useCallback(() => {
        router.replace('/RegisterScreen');
    }, []);

    return (
        <LinearGradient colors={['#fff', '#ccc']} className="flex-1 bg-white">
            <View className="flex-1 justify-start relative items-center">
                <View className='w-full phone-sm:h-[40%] phone-md:h-[40%] phone-lg:mt-[-10px] phone-lg:h-[50%] flex justify-center items-center'>
                    <Image resizeMode='contain' source={banner1} alt="banner_1" className='w-full'/>
                </View>
                <View className='w-full items-center phone-sm:mt-20 phone-lg:mt-10 flex flex-col justify-center'>
                    <Text className='w-full text-center phone-sm:text-[20px] phone-md:text-[30px] phone-lg:text-[40px] font-bold text-green-600'>
                        { translationsHome.t('headerTitle') }
                    </Text>
                    <Text className='w-full text-center phone-sm:text-[14px] phone-md:text-[16px] phone-lg:text-[18px] mt-4 px-[15%] text-neutral-500'>
                        { translationsHome.t('earnMoney') }
                    </Text>
                </View>
                <View className='w-full flex items-center mt-10'>
                    <TouchableHighlight style={{elevation: 2}} onPress={handleRedirectRegister} className='w-[60%] phone-sm:h-[45px] phone-md:h-[55px] phone-lg:h-[65px] overflow-hidden justify-center flex items-center bg-green-600 rounded-[35px]'>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className='w-full h-full flex justify-center items-center' colors={['#11998e', '#38ef7d']}>
                            <Text className="text-white phone-sm:text-[14px] phone-md:text-[16px] phone-lg:text-[18px] font-semibold text-center mb-0 pb-0">
                                { translations.t('button') }
                            </Text>
                        </LinearGradient>
                    </TouchableHighlight>
                    <Text onPress={handleRedirectLogin} className="text-green-600 mt-4 phone-sm:text-[14px] phone-md:text-[16px] phone-lg:text-[18px]">
                        { translations.t('redirect') }
                    </Text>
                </View>
                <View className='w-full flex items-center absolute bottom-4'>
                    <Text className='text-neutral-500 phone-sm:text-[8px] phone-md:text-[10px] phone-lg:text-[12px]'>Version 1.0.0 | Thinknow Research</Text>
                </View>
            </View>
        </LinearGradient>
    );
}