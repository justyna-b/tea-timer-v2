import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native'
import { Constants, Audio } from 'expo-av'
import CountDown from 'react-native-countdown-component'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'
import { CheckBox } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const source = {
  uri: 'https://freesound.org/data/previews/510/510103_37876-lq.mp3'
}

export default class RedTea extends Component {
  state = {
    playingStatus: 'nosound',
    change: false,
    isSelected: false,
    selectedItems: [],
    showFav: false
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

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems })
  }

  onSelectConfirm = () => {
    this.setState({ showFav: true })
  }

  render () {
    let radio_props = [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 2 }
    ]
    const items = [
      {
        name: 'Owoce', id: 0,
        children: [
          { name: 'Jabłko', id: 11 },
          { name: 'Truskawka', id: 12 },
          { name: 'Ananas', id: 13 },
          { name: 'Malina', id: 14 },
          { name: 'jagoda', id: 15 },
          { name: 'Kiwi', id: 16 },
          { name: 'Pigwa', id: 17 },
          { name: 'Gruszka', id: 18 },
          { name: 'Smoczy owoc', id: 19 },
          { name: 'Papaja', id: 20 },
          { name: 'Liczi', id: 21 },
          { name: 'Winogrono', id: 22 },
          { name: 'Wiśnia', id: 23 },
          { name: 'Pomarańcza', id: 24 },
          { name: 'Granat', id: 25 },
          { name: 'Brzoskwinia', id: 26 },
          { name: 'Morela', id: 27 },
          { name: 'Grejpfrut', id: 28 },
          { name: 'Arbuz', id: 29 }
        ]
      }
    ]

    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://ocdn.eu/images/pulscms/ZTA7MDA_/9e4a834c-3eb7-45f4-925f-dbbd156a2d65.jpeg'
          }}
        />
        <View style={styles.mainContainer}>
          <Text style={{ color: 'white' }}>Czerwona herbata</Text>
          <Text style={{ color: 'white' }}>
            Czy chcesz zmienić czas parzenia (standardowy 7min)?
          </Text>
          <RadioForm
            style={{ color: 'white' }}
            radio_props={radio_props}
            initial={1}
            animation={false}
            buttonColor={'white'}
            labelColor={'white'}
            selectedButtonColor={'white'}
            selectedLabelColor={'white'}
            onPress={value => {
              this.setState({ change: value })
            }}
          />

          {Number(this.state.change) === 1 ? (
            <View>
              <Text style={{ color: 'white' }}>Dostępne wkrótce :(</Text>
            </View>
          ) : (
            <CountDown
              until={60 * 0 + 60 * 3}
              size={30}
              onFinish={this._playAndPause}
              digitStyle={{ backgroundColor: 'red' }}
              digitTxtStyle={{ color: 'black' }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'Minut', s: 'Sekund' }}
            />
          )}

          <Image
            style={styles.fullImage}
            source={{
              uri:
                'https://www.aptekagemini.pl/poradnik/wp-content/uploads/2019/02/czerwona-herbata-i-jej-w%C5%82a%C5%9Bciwo%C5%9Bci-695x462.jpg'
            }}
          />
          <Text style={{ color: 'white', textAlign: 'justify', padding: 30 }}>
            {' '}
            Czerwona herbata często bywa nazywana herbatą czystości, gdyż nie
            zawiera ona żadnych dodatków, konserwantów czy barwinków. Z punktu
            widzenia konsumentów, którzy zainteresowani są jej spożywaniem, w
            naparze znajduje się kofeina i stosunkowo niewielka ilość taniny.
            Poza tym w jednej filiżance czerwonej herbaty znaleźć można szereg
            składników odżywczych. Poza żelazem, potasem czy sodem, napar bogaty
            jest też w wapń, miedź, cynk, magnez czy fluor. Właśnie z tego
            względu jest szczególnie doceniania przez sportowców. Nie tylko gasi
            pragnienie i dostarcza organizmowi składników niezbędnych do jego
            prawidłowego funkcjonowania, ale również może być spożywana na
            rozmaite sposoby, w tym z sokiem owocowym czy jako herbata mrożona.{' '}
          </Text>
          <Text style={{ color: 'white' }}>
            {' '}
            Wybierz swoje ulubione smaki a my podpowiemy Ci którą herbatę wybrać{' '}
          </Text>
          <View style={{ backgroundColor: 'red', marginBottom: '5%' }}>
            <SectionedMultiSelect
              items={items}
              uniqueKey='id'
              hideSearch={true}
              confirmText='WYBIERZ'
              primary='yellow'
              subKey='children'
              selectText='Wybierz...'
              showDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              selectedText=''
              onConfirm={this.onSelectConfirm}
            />
          </View>
          {this.state.showFav ? (
            <View>
              <Image
                style={styles.fullImage}
                source={{
                  uri:
                    'https://www.recepta.pl/images/artykul/Fotolia_126615730_Subscription_Monthly_M.jpg'
                }}
              />
              <Text style={{ color: 'white', textAlign: 'justify', justifyContent: 'center',fontWeight: 'bold', textAlign: 'center', alignSelf:'center', marginTop: 20 }}>
               PU ERH
              </Text>
              <Text
                style={{ color: 'white', textAlign: 'justify', padding: 30, justifyContent: 'center' }}
              >
                Herbata Pu Erh sheng (surowy/„raw”) w formie zielonej -
                w której herbata nie została poddana fermentacji
                mikrobiologicznej lub została jej podana w bardzo niewielkim
                stopniu, w smaku jest dość ostra i gorzka. 
              </Text>
            </View>
          ) : (
            <Text style={{ color: 'white' }}> </Text>
          )}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    backgroundColor: 'black',
    flex: 1
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
  },
  tinyLogo: {
    width: '100%',
    height: 58
  },
  fullImage: {
    width: '100%',
    height: 200
  },
  checkbox: {
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  label: {
    margin: 8,
    color: 'white'
  }
})
