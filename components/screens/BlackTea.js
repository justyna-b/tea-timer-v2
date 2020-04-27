// import React from 'react'
// import { Text, View, StyleSheet } from 'react-native'

// const BlackTea = () => {
//   return (
//     <View style={styles.header}>
//       <Text>red tea</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: 'black',

//   },
//   headerTitle: {
//     fontWeight: 'bold',
//     color: 'white'
//   }
// })

// export default BlackTea

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import { Constants, Audio } from 'expo-av'
import CountDown from 'react-native-countdown-component'

const source = {
  uri: 'https://freesound.org/data/previews/510/510103_37876-lq.mp3'
}

const image = {
  uri:
    'https://lh3.googleusercontent.com/proxy/2lshHJq53jxnJ8i_mk1vhgXVXQov3thMFi__NE7_kOitYr49NA0NH2b4NKA9I0VhLLZZsXxG7j_FmqcdaTtWC1RnVpUpPwGDQlnCaWffDDVD2kdE6Z1rpZQ'
}

export default class BlackTea extends Component {
  state = {
    playingStatus: 'nosound'
  }

  async _playRecording () {
    const { sound } = await Audio.Sound.create(
      source,
      {
        shouldPlay: true,
        isLooping: false
      },
      this._updateScreenForSoundStatus
    )
    this.sound = sound
    this.setState({
      playingStatus: 'playing'
    })
  }

  _updateScreenForSoundStatus = status => {
    if (status.isPlaying && this.state.playingStatus !== 'playing') {
      this.setState({ playingStatus: 'playing' })
    }
  }

  async _pauseAndPlayRecording () {
    if (this.sound != null) {
      if (this.state.playingStatus == 'playing') {
        console.log('pausing...')
      } else {
        console.log('playing...')
        await this.sound.playAsync()
        console.log('playing!')
        this.setState({
          playingStatus: 'playing'
        })
      }
    }
  }

  _syncPauseAndPlayRecording () {
    if (this.sound != null) {
      if (this.state.playingStatus == 'playing') {
        this.sound.pauseAsync()
      } else {
        this.sound.playAsync()
      }
    }
  }

  _playAndPause = () => {
    switch (this.state.playingStatus) {
      case 'nosound':
        this._playRecording()
        break
      case 'donepause':
      case 'playing':
        this._pauseAndPlayRecording()
        break
    }
  }

  render () {
    return (
      <ImageBackground source={image} style={styles.container}>
        {/* <View style={styles.container}> */}
        <View style={styles.header}>
          <Text>black tea</Text>
          <CountDown
            until={60 * 0 + 5}
            size={30}
            //  onFinish={() => alert('Finished')}
            onFinish={this._playAndPause}
            digitStyle={{ backgroundColor: '#FFF' }}
            digitTxtStyle={{ color: '#1CC625' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: 'MM', s: 'SS' }}
          />
          {/* </View> */}
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',

    resizeMode: 'cover',
    justifyContent: 'center'
  },
  button: {
    width: 256,
    height: 256 / 1.618,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'transparent'
  }
})
