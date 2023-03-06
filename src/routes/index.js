import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, Home, Explore, Profile } from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Main = () => {
    return (
        <Tab.Navigator>
            <Stack.Screen name='Home' component={Home} options={{ headerTitleAlign: 'center', statusBarColor: '#FC7300' }} />
            <Stack.Screen name='Explore' component={Explore} options={{ headerTitleAlign: 'center', statusBarColor: '#FC7300' }} />
            <Stack.Screen name='Profile' component={Profile} options={{ headerTitleAlign: 'center', color: '#FC7300'  }} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}