import { StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react'
import { layoutProps } from '../../data/Types'
import { IMAGES } from '../../assets/images'

const Layout = (props: layoutProps) => {
    const { children, style } = props
    return (
        <ImageBackground source={IMAGES.backgroundImage} style={styles.BackgroundImage}>
            <View style={[styles.Container, style]}>
                {children}
            </View>
        </ImageBackground>
    )
}

export default Layout

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    BackgroundImage: {
        flex: 1,
        width: '100%'
    }
})