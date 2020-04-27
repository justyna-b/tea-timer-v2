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

const MainView = props => {
  return (
    <View style={styles.screen}>
      <View>
        <View style={styles.title}>
          <Text style={{ color: 'white' }}> Wybierz herbatę: </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => {
              props.navigation.navigate({ routeName: 'Czerwona' })
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://post.healthline.com/wp-content/uploads/sites/3/2020/02/323637_2200-1200x628.jpg'
              }}
              style={styles.buttonBckgImg}
            />
            <View style={styles.buttonContent}>
              <Text style={{ color: 'white' }}>Czerwona</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <ImageBackground
              source={{
                uri:
                  'https://set-magazine.com/wp-content/uploads/2019/09/Green-Tea-Health-Benefits.jpg'
              }}
              style={styles.buttonBckgImg}
            />
            <View style={styles.buttonContent}>
              <Text style={{ color: 'white' }}>Zielona</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <ImageBackground
              source={{
                uri:
                'https://i2.wp.com/veganpeak.com/wp-content/uploads/black-tea.jpg?w=862&ssl=1'
              }}
              style={styles.buttonBckgImg}
            />
            <View style={styles.buttonContent}>
              <Text style={{ color: 'white' }}>Czarna</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <ImageBackground
              source={{
                uri:
                  'https://s3.viva.pl/newsy/elizabeth-arden-white-tea-biala-herbata-436353-GALLERY_BIG.jpg'
              }}
              style={styles.buttonBckgImg}
            />
            <View style={styles.buttonContent}>
              <Text style={{ color: 'white' }}>Biała</Text>
            </View>
          </TouchableOpacity>
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
    height: 100,
    marginLeft: '10%',
    width: '80%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    marginTop: '10%'
  },
  buttonBckgImg: {
    height: 100,
    width: '100%',
    opacity: 0.7,
    position: 'absolute'
  },
  buttonContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'
  }
})

export default MainView
