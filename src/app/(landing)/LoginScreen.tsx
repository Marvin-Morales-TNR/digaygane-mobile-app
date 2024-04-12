import React, { useCallback, useState } from 'react';
import { Image, Text, View } from 'react-native';
import esCopies from 'src/data/landingCopies/login-screen-data-es.json';
import enCopies from 'src/data/landingCopies/login-screen-data-en.json';
import useAppLanguage from 'src/hooks/useAppLanguage';
import useLandingStore from 'src/store/landingStore';
import TNRTextInput from 'src/components/@generics/TNRTextInput';
import { LandingStoreInterface } from 'src/interfaces/landingStoreInterface';
import { storeDataAsync } from 'src/utils';
import logo from 'assets/images/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import TNRButton from 'src/components/@generics/TNRButton';
import { useRouter } from 'expo-router';
import { yupResolver } from '@hookform/resolvers/yup';
import banner2 from 'assets/images/banner2-01.png';
import TNRKeyboardAvoidingView from 'src/components/@generics/TNRKeyboardAvoidingView';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { requestLogin } from 'src/services/authentication';
import { ActivityIndicator, Switch } from 'react-native-paper';

export default function LoginScreen() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const currentLang = useLandingStore((state: LandingStoreInterface) => state.currentLang);
    const translations = useAppLanguage({ es: esCopies, en: enCopies }, currentLang);

    const schema = yup.object().shape({
        email: yup
            .string()
            .email(translations.t('badEmail'))
            .required(translations.t('required')),
        password: yup
            .string()
            .min(6)
            .required(translations.t('required')),
    });

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const handleToggle = () => {
        setIsEnabled((previousState: boolean) => !previousState);
    };

    const handleRedirectRegister = useCallback(() => {
        router.replace('/RegisterScreen');
    }, []);
   
    const handleSubmitLogin = useCallback(
        async (data: yup.InferType<typeof schema>) => {
            setLoading(true);
            const response = await requestLogin();
            await storeDataAsync('home-screen-not-shown', 'true');
            console.log('JJJ', data, response.data);
            setLoading(false);
        // router.navigate('/RegisterScreen');
        }, [setLoading, storeDataAsync, requestLogin]);

    return (
        <View className="flex-1 bg-blue-100 flex items-center">
            <View className='w-full h-[65%] flex-1 bg-green-600 relative'>
                <Image source={banner2} resizeMode='cover' className='w-full h-full absolute z-0'/>
            </View>
            <TNRKeyboardAvoidingView className='w-full h-[35%] bg-white justify-end flex items-center'>
                <View className='w-[85%] h-auto p-6 bg-white rounded-[16px] shadow-xl shadow-neutral-400 mb-10'>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value}, fieldState: { error } }) => (
                            <TNRTextInput  
                                error={!!error}
                                value={value}
                                mode='outlined' 
                                disabled={loading}
                                onChangeText={onChange}
                                helperTextLabel={error?.message}
                                placeholder='email@example.com' 
                                label={translations.t('emailLabel')}
                            />
                        )}
                    />
                    <Controller
                        name='password'
                        control={control}
                        render={({ field: { onChange, value}, fieldState: { error } }) => (
                            <TNRTextInput 
                                error={!!error}
                                value={value}
                                secureTextEntry 
                                mode='outlined' 
                                disabled={loading}
                                onChangeText={onChange}
                                helperTextLabel={error?.message}
                                placeholder='*************' 
                                label={translations.t('passwordLabel')}
                                right={<Text>Hla</Text>}
                            />
                        )}
                    />
                    
                    <View className='flex flex-row items-center mb-4'>
                        <Switch value={isEnabled} onChange={handleToggle}/>
                        <Text className='phone-sm:text-[9px] text-neutral-500 phone-md:text-[13px] phone-lg:text-[14px] ml-4'>
                            { translations.t('saveData') }
                        </Text>
                    </View>
                    <TNRButton 
                        borderWidth={1}
                        disabled={loading}
                        rippleColor="transparent"
                        onPress={handleSubmit(handleSubmitLogin)}
                        icon={() => <ActivityIndicator color='white' size={20} animating={loading}/>}
                    >
                        { translations.t('submit') }
                    </TNRButton>
                    <Text className='text-center mt-4 text-neutral-500 phone-sm:text-[9px] phone-md:text-[12px] phone-lg:text-[13px]'>
                        { translations.t('register').split('{0}')[0] }
                    </Text>
                    <Text onPress={handleRedirectRegister} className='text-neutral-600 phone-sm:text-[10px] phone-md:text-[12px] phone-lg:text-[14px] font-bold text-center'>
                        { translations.t('register').split('{0}')[1] }
                    </Text>
                </View>
                <LinearGradient colors={['#272727', '#3F3F3F']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} className='w-full h-[60px] flex justify-center px-10 bg-neutral-800'>
                    <View className='w-[150px] h-[70%] flex'>
                        <Image source={logo} className='w-full h-full' resizeMode='contain'/>
                    </View>
                </LinearGradient>
            </TNRKeyboardAvoidingView> 
        </View>
    );
}