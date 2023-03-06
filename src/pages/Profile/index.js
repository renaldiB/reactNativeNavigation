import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

const Profile = () => {
  return (
    <Provider store={store}>
      <View style={styles.Profile}>
        <Text style={styles.ProfileText}>Profile</Text>
      </View>
    </Provider>
  )
}

export default Profile

const styles = StyleSheet.create({
  Profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfileText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
})