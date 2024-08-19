import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { TEXT_STYLE } from '../../data/StyleGuides'
import { headerProps } from '../../data/Types'

const Header = (props: headerProps) => {
    const { onLeftPress, title, addLeft, style, textStyle } = props
    return (
        <View style={[styles.Container, style]}>
            {addLeft ?
                <TouchableOpacity onPress={onLeftPress}>
                    {addLeft}
                </TouchableOpacity>
                :
                <View style={{ width: '10%' }} />
            }

            <Text style={[styles.Title, textStyle]}>{title}</Text>

            <View style={{ width: '5%' }} />
        </View>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '91%',
        alignSelf: 'center',
        marginTop: '4%'
    },
    Title: {
        ...TEXT_STYLE.regular
    }
})