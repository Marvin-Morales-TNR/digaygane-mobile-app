import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native-paper';

interface TNRActivityIndicatorProps 
extends Omit<ActivityIndicatorProps, 'size'> {
   size: number;
}

export default function TNRActivityIndicator({
    size,
    ...props
}: TNRActivityIndicatorProps) {
    return <ActivityIndicator size={size} {...props} />;
}