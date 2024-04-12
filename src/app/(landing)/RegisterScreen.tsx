import React from 'react';
import { SafeAreaView, View } from 'react-native';
import useLandingStore from 'src/store/landingStore';
import useAppLanguage from 'src/hooks/useAppLanguage';
import TNRTextInput from 'src/components/@generics/TNRTextInput';
import { LandingStoreInterface } from 'src/interfaces/landingStoreInterface';
import copiesRegisterEs from 'src/data/landingCopies/register-screen-data-es.json';
import copiesRegisterEn from 'src/data/landingCopies/register-screen-data-en.json';
import { Text } from 'react-native';

export default function RegisterScreen() {
    const currentLang = useLandingStore((state: LandingStoreInterface) => state.currentLang);
    const translations = useAppLanguage({ es: copiesRegisterEs, en: copiesRegisterEn }, currentLang);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View className='w-full flex-1 pt-10 px-[8%] bg-white'>
                <Text className='phone-sm:text-[12px] phone-md:text-[15px] phone-lg:text-[18px]'>
                    { translations.t('title') }
                </Text>

                <Text className='phone-sm:text-[10px] phone-md:text-[13px] phone-lg:text-[15px]'>
                    { translations.t('subtitle') }
                </Text>
                <TNRTextInput label='Email' />
                <View className='w-full flex flex-row space-x-2'>
                    <TNRTextInput label='Email' containerClassName='w-[50%]'/>
                    <TNRTextInput label='Email' containerClassName='w-[50%]' />
                </View>
                <View className='w-full flex flex-row space-x-2'>
                    <TNRTextInput label='Email' containerClassName='w-[50%]'/>
                    <TNRTextInput label='Email' containerClassName='w-[50%]' />
                </View>
            </View>
        </SafeAreaView>
    );
}