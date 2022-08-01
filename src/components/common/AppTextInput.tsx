import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import colors from "../../config/colors";

interface Props {
    style?: ViewStyle | Array<ViewStyle>,
    placeholder: string,
    onChange?: () => string
}

const AppTextInput: React.FC<Props> = ({placeholder, style}) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} placeholderTextColor={colors.gray90}
                       style={[styles.textInput, Array.isArray(style) ? {...style} : style]}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        marginVertical: 10,
        paddingHorizontal: 15,
        width: '100%',
        borderRadius: 6,
        backgroundColor: colors.gray10,
        justifyContent: 'center'
    },
    textInput: {
        width: '100%'
    }
})

export default AppTextInput;
