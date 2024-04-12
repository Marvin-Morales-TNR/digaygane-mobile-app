import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

interface TNRKeyboardAvoidingView 
extends Omit<KeyboardAvoidingViewProps, 'className' | 'behavior' | 'keyboardVerticalOffset'> {
   className: string;
   iOSoffset: number;
   androidOffset: number;
   children: ReactElement | ReactNode;
}

export default function TNRKeyboardAvoidingView({
    className,
    children,
    iOSoffset,
    androidOffset,
    ...props
}: Partial<TNRKeyboardAvoidingView>) {
    return (
        <KeyboardAvoidingView 
            keyboardVerticalOffset={Platform.OS === 'ios' ? iOSoffset || 100 : androidOffset || 0}
            behavior={Platform.OS !== 'ios' ? 'padding' : undefined} 
            style={{ flex: 1 }}
            className={clsx('w-full', className)}
            { ...props }
        >
            { children }
        </KeyboardAvoidingView>
    );
}