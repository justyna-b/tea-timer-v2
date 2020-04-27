import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import Header from './components/Header.js'
// import TeasGrid from './screens/TeasGrid.js'
import TeasNavigator from './navigation/TeasNavigator.js'

export default function App () {
 
  return(
    <View style={styles.screen}>
    <TeasNavigator/>
    {/* <Text>lololl</Text> */}
    </View>
  ) 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
