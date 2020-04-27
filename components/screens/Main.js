import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native'
import tea from '../../assets/tea.jpg'
import { CheckBox } from 'react-native'

const MainView = props => {
  const [isSelected, setSelection] = useState(false)
  return (
    <View style={styles.screen}>
      <View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate({ routeName: 'Rodzaje' })
            }}
          >
            <ImageBackground
              source={{
                uri:
                  'https://www.cbdbreaker.com/wp-content/uploads/2019/01/CBDBreaker-Tea-Header.jpg'
              }}
              style={styles.buttonBckgImg}
            />
            <View style={styles.buttonContent}>
              <Text style={{ color: 'white' }}>Tea-timer! </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              checkedColor='white'
              uncheckedColor='white'
            />
            <Text style={styles.label}>Polubiłeś nas?</Text>
          </View>
          <Text style={{ color: 'white', fontSize:100 }}>
             {isSelected ? '👍' : '👎'}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black'
  },
  button: {
    backgroundColor: 'black',
    height: 200,
    marginLeft: '10%',
    width: '80%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    marginTop: '20%',
    marginBottom: '20%'
  },
  buttonBckgImg: {
    height: 200,
    width: '100%',
    opacity: 0.4,
    position: 'absolute'
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container: {
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    alignSelf: 'center',
    backgroundColor: 'grey'
  },
  label: {
    margin: 8,
    color: 'white'
  }
})

export default MainView
