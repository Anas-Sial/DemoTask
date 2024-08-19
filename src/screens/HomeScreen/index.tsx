import { StyleSheet, View } from 'react-native'
import React from 'react'
import { commonStyles, hp } from '../../data/StyleGuides'
import { Button } from '../../components'
import { routes } from '../../data/DummyData'

const HomeScreen = (props: any) => {
    const { navigation } = props
    return (
        <View style={commonStyles.mainContainer}>

            {routes.map((route, index) => (
                <Button
                    key={index}
                    title={route?.title}
                    onPress={() => navigation.navigate(route?.screen)}
                    style={styles.buttonStyle}
                />
            ))}


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: hp(3)
    }
})