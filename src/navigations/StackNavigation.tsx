import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREEN } from '../data/enums';
import * as screens from '../screens';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const StackNavigation = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name={SCREEN.HomeScreen} component={screens.HomeScreen} />
                <Stack.Screen name={SCREEN.ApiScreen} component={screens.ApiScreen} />
                <Stack.Screen name={SCREEN.TrackScreen} component={screens.TrackScreen} />
                <Stack.Screen name={SCREEN.AllTasks} component={screens.AllTasks} />
                <Stack.Screen name={SCREEN.ImageScreen} component={screens.ImageScreen} />
                <Stack.Screen name={SCREEN.TabView} component={screens.TabView} />
                
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigation;
