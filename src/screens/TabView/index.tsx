import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { TabView as RNTabView, SceneMap, TabBar } from 'react-native-tab-view'
import { COLOR } from '../../data/StyleGuides';
import { Label } from '../../components';

const InitialContent = () => (
    <View style={styles.initialContainer}>
        <Label style={styles.initialText}>Welcome! Here is initial data.</Label>
    </View>
);

const FirstRoute = () => (
    <View style={styles.tabContainer}>
        <Label style={styles.tabText}>This is the first tab content.</Label>
    </View>
);

const SecondRoute = () => (
    <View style={styles.tabContainer}>
        <Label style={styles.tabText}>This is the second tab content.</Label>
    </View>
);

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: COLOR.bg_Black }}
        style={{ backgroundColor: COLOR.gray_8 }}
    />
)

const TabView = () => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <InitialContent />
            <View style={styles.tabContainer}>
                <RNTabView
                    style={{ backgroundColor: COLOR.white }}
                    navigationState={{ index, routes }}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                    })}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={renderTabBar}
                />
            </View>
        </ScrollView>
    )
}

export default TabView

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    initialContainer: {
        padding: 20,
        backgroundColor: COLOR.gray_5,
        marginBottom: 20,
    },
    initialText: {
        fontSize: 18,
        textAlign: 'center',
        color: COLOR.jetBlack
    },
    tabContainer: {
        flex: 1,
    },
    tabText: {
        color: COLOR.jetBlack
    },
})
