import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { ACTIVEOPACITY, COLOR, FONT, commonStyles, hp } from '../../data/StyleGuides'
import { buttonProps } from '../../data/Types'

const Button = (props: buttonProps) => {
    const { style, onPress, disabled, activeOpacity, title, textStyle } = props
    return (
        <TouchableOpacity style={[styles.ButtonContainer, style]} onPress={onPress} activeOpacity={activeOpacity ? activeOpacity : ACTIVEOPACITY} disabled={disabled}>
            <Text style={[styles.ButtonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Button)

const styles = StyleSheet.create({
    ButtonContainer: {
        height: hp(6.3),
        width: '92%',
        alignSelf: 'center',
        backgroundColor: COLOR.green,
        ...commonStyles.center,
        borderRadius: hp(10),
    },
    ButtonText: {
        fontSize: 15,
        color: COLOR.white,
        fontFamily: FONT.Nunito_SemiBold
    },
})