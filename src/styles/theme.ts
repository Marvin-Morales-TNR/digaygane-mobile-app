import { DefaultTheme } from 'react-native-paper';

const TNRTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#107BD5', // Color primario
        accent: '#107BD5', // Color de acento
        background: '#fff', // Color de fondo
    },
    styles: {
        TextInput: {
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
        },
    }
};

export default TNRTheme;