import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    return colorFromProps ? colorFromProps : Colors[theme][colorName];
}
// 
export type ThemeProps = {
    light?: string;
    dark?: string;
    themed?: boolean;
};

export type TextProps = ThemeProps & DefaultText['props'] & { bold?: boolean, thin?: boolean };
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
    const { style, light, dark, bold, thin, ...otherProps } = props;
    const color = useThemeColor({ light, dark }, 'text');

    return <DefaultText style={[{ color, fontSize: 16, fontFamily: bold ? 'Rota-Bold' : thin ? 'Rota-thin' : 'Rota' }, style]} {...otherProps} />;
}


export function View(props: ViewProps) {
    const { style, light, dark, themed, ...otherProps } = props;
    const backgroundColor = themed ?
        useThemeColor({ light, dark }, 'background') : 'transparent';

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
