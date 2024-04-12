import React from 'react';
import clsx from 'clsx';
import { Text, View } from 'react-native';
import { TextInput, HelperText, TextInputProps, HelperTextProps } from 'react-native-paper';

interface TNRTextInputProps extends 
Omit<TextInputProps, 'label' | 'error' | 'mode' | 'className' | 'activeOutlineColor'> {
   error: boolean;
   label: string;
   squareInput: boolean;
   containerClassName: string;
   mode: 'flat' | 'outlined';
   activeOutlineColor: string;
   inputClassName: string;
   helperTextType: 'error' | 'info';
   helperTextLabel: string;
   helperTextVisibility: boolean;
   helperTextProps: Omit<HelperTextProps, 'className' | 'type' | 'visible'>;
   helperTextClassName: string;
   flatInputLabelClassName: string;
}

export default function TNRTextInput({
    mode,
    error,
    label,
    squareInput,
    containerClassName,
    inputClassName,
    helperTextLabel,
    helperTextType,
    activeOutlineColor,
    helperTextProps,
    helperTextClassName,
    helperTextVisibility,
    flatInputLabelClassName,
    ...props
}: Partial<TNRTextInputProps>) {
    return (
        <View className={clsx('w-full', containerClassName)}>
            { squareInput && (
                <Text className={clsx('w-full text-neutral-600 mb-1 text-[14px]', flatInputLabelClassName)}>
                    { label }
                </Text>
            ) }
            <TextInput 
                error={error}
                mode={mode || 'outlined'}
                underlineColor='transparent'
                placeholderTextColor='#C3C3C3'
                className={clsx('bg-transparent phone-sm:text-[14px] phone-md:text-[16px] phone-sm:h-[40px] phone-md:h-[50px]', squareInput && 'phone-sm:h-[40px] phone-md:h-[50px]', inputClassName)}
                activeOutlineColor={activeOutlineColor || '#0078E2'}
                label={!squareInput ? label : undefined}
                { ...props }
            />
            <HelperText 
                className={clsx(
                    !error ? 'opacity-0' : 'opacity-100', 
                    helperTextClassName,
                    'w-full phone-sm:text-[8px] py-0 my-0 phone-md:text-[12px] ml-0 pl-0'
                )}
                type={helperTextType || 'error'} 
                visible={error || helperTextVisibility}
                { ...helperTextProps } 
            >
                { helperTextLabel }
            </HelperText>
        </View>
    );
}