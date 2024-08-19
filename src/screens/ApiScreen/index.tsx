import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Label } from '../../components';
import { COLOR, TEXT_STYLE } from '../../data/StyleGuides';

const ApiScreen = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const result = await response.json()
            setData([result])
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const renderHeader = () => (
        <View style={styles.header}>
            <Label style={styles.headerText}>Sticky Header</Label>
        </View>
    )

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    const renderItem = ({ item }: any) => (
        <View style={styles.item}>
            <Label style={styles.labelStyle}>{item?.title}</Label>
            <Label style={styles.labelStyle}>{item?.body}</Label>
        </View>
    )

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            stickyHeaderIndices={[0]}
            onRefresh={() => {
                setIsRefreshing(true);
                fetchData();
                setIsRefreshing(false);
            }}
            refreshing={isRefreshing}
        />
    )
}

export default ApiScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    headerText: {
        ...TEXT_STYLE.title2,
        color: COLOR.jetBlack
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    labelStyle: {
        color: COLOR.jetBlack
    }
})