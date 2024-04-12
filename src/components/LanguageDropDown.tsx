import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownLanguageInterface } from 'src/interfaces';
import { storeDataAsync } from 'src/utils';
import flag0 from 'assets/images/flag-0.png';
import flag1 from 'assets/images/flag-1.png';

export default function LanguageDropDown({ 
    currentLang,
    updateCurrentLang 
}: DropDownLanguageInterface) {
    const [value, setValue] = useState<string>('0');

    const languageOptions = [
        { label: 'ENG', value: '0' },
        { label: 'ESP', value: '1' }
    ];

    const flagImageView = useCallback((elem: string) => (
        <View className='w-[30px] h-[20px] mr-2 flex justify-center items-center'>
            <Image 
                source={elem === '0' ? flag0 : flag1} 
                alt='lang_logo' 
                className='w-full'
                resizeMode='contain'
            />
        </View>
    ), []);

    const renderItem = useCallback((elem: typeof languageOptions[0]) => (
        <View className='flex flex-row justify-center py-2'>
            { flagImageView(elem.value) }
            <Text className='text-neutral-500 text-[14px]'>{ elem.label }</Text>
        </View>
    ), []);

    useEffect(() => {
        updateCurrentLang(Number(value));
        storeDataAsync('landing-lang', value);
    }, [value, updateCurrentLang, storeDataAsync]);

    return (
        <View className="w-[125px] rounded-[8px] px-3 py-2">
            <Dropdown 
                data={languageOptions}
                value={value}  
                labelField="label"
                valueField="value"
                iconColor='white'
                activeColor='white'
                renderItem={renderItem}
                dropdownPosition="bottom"
                containerStyle={{borderRadius: 8, width: 100, overflow: 'hidden'}}
                itemContainerStyle={{backgroundColor: 'transparent'}}
                selectedTextStyle={{color: 'white'}}
                renderLeftIcon={() => flagImageView(String(currentLang))}
                onChange={(item) => setValue(item.value)}
            />
        </View>
    );
}