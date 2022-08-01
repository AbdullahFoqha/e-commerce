import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text, TextStyle, ViewStyle } from "react-native";
import colors from "../../config/colors";

interface Props {
    style?: ViewStyle | Array<ViewStyle>,
    labelStyle?: TextStyle | Array<TextStyle>,
    label: string,
    onClick?: (event: GestureResponderEvent) => void
}

const AppButton: React.FC<Props> = ({style, onClick, label, labelStyle}) => {
    return (
        <Pressable onPress={onClick} style={[styles.container, Array.isArray(style) ? {...style} : style]}>
            <Text style={[styles.buttonLabel, Array.isArray(labelStyle) ? {...labelStyle} : labelStyle]}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: '100%',
        margin: 10,
        borderRadius: 6,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLabel: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '500',
    }
})

export default AppButton;
