import React, { ReactNode } from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { Text, TextProps } from 'react-native';
import clsx from 'clsx';

interface TNRButton extends 
Omit<ButtonProps, 'mode' | 'className' | 'buttonColor'> {
   mode: 'contained' | 'contained-tonal' | 'elevated' | 'outlined' | 'text';
   className: string;
   children: ReactNode;
   textClassName: string;
   borderWidth: number;
   borderColor: string;
   textProps: Omit<TextProps, 'className'>;
}

export default function TNRButton({
    mode,
    className,
    children,
    textProps,
    borderWidth,
    borderColor,
    textClassName,
    ...props
}: Partial<TNRButton>) {
    return (
        <Button 
            textColor='white'
            mode={mode || 'elevated'} 
            style={{borderColor: borderColor || '#008428', borderWidth: borderWidth || 0}}
            className={clsx('w-full phone-sm:h-[50px] phone-md:h-[60px] flex justify-center rounded-[8px] bg-green-600', className)} 
            { ...props }
        >
            <Text 
                className={clsx('phone-sm:text-[12px] phone-md:text-[14px] phone-lg:text-[16px] font-bold', textClassName)}
                { ...textProps }
            >
                { children }
            </Text>
        </Button>
    );
}