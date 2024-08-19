import { StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import { TEXT_STYLE } from '../../data/StyleGuides'
import { textProps } from '../../data/Types'

const Label = (props: textProps) => {
    const { children, style } = props
    return (
        <Text style={[styles.TextStyle, style]}>{children}</Text>
    )
}

export default memo(Label)

const styles = StyleSheet.create({
    TextStyle: {
        ...TEXT_STYLE.regular,
    }
})