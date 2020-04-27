import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native'
import tea from '../../assets/tea.jpg'

const TeasGrid = props => {
  const image = {
    uri:
      'https://lh3.googleusercontent.com/proxy/2lshHJq53jxnJ8i_mk1vhgXVXQov3thMFi__NE7_kOitYr49NA0NH2b4NKA9I0VhLLZZsXxG7j_FmqcdaTtWC1RnVpUpPwGDQlnCaWffDDVD2kdE6Z1rpZQ'
  }

  return (
    <View >
    <Text> XXXXX </Text>

      {/* <Text style={styles.textHeader}>CHOOSE YOUR ONE</Text>

      <View style={styles.gridContainerDown}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate({ routeName: 'White' })
          }}
        >
          <Text style={styles.text}>WHITE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate({ routeName: 'Black' })
          }}
        >
          <Text style={styles.text}>BLACK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.gridContainerDown}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate({ routeName: 'Red' })
          }}
        >
          <Text style={styles.text}>RED</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate({ routeName: 'Green' })
          }}
        >
          <Text style={styles.text}>GREEN</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/tea.jpg')}
      /> */}
      </View>
    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // flexDirection: 'row',
    paddingTop: 50,
    // justifyContent: 'space-between',
    paddingHorizontal: '15%',
    // resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  // gridContainerUp: {
  //   flex: 1
  // },
  gridContainerDown: {
    // flex: 1,
    // marginHorizontal: 1,
    fontWeight: 'bold'
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 1,
    marginVertical: 1,
    height: '20%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 0,
    paddingLeft: '30%',
    backgroundColor: 'green'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },

  textHeader: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 30
  }
})

export default TeasGrid
