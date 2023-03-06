import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StackActions } from '@react-navigation/native'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.Splash}>
            <Text style={styles.SplashText}>Wait A Second ...</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    Splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SplashText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    }
})