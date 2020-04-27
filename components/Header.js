import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B1104F',
    width: '100%',
    height: '15%',
    paddingTop: '16%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Header
