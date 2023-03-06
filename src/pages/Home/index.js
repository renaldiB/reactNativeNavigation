import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.Home}>
            <Text style={styles.HomeText}>Halaman Utama</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    HomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    }
})