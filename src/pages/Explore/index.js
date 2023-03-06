import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.Explore}>
      <Text style={styles.ExploreText}>Explore</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
  Explore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ExploreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
})