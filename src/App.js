import React from 'react';
import { AppRegistry } from 'react-native';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native';

import MultiTrackContainer from './components/MultiTrack/MultiTrackContainer';

async function askForMicPermission() {
  const { Permissions } = Expo;
  const { status } = await Permissions.getAsync(Permissions.AUDIO_RECORDING);
  if (status !== 'granted') {
    alert(`Recording is disabled.`);
  }
}

export default class App extends React.Component {
  componentWillMount() {
    askForMicPermission();
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <MultiTrackContainer />
      </View>
    );
  }
}

AppRegistry.registerComponent('loopprogresser', () => App);