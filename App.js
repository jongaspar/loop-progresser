import React from 'react';
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

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store/store.js';

import FourTrack from './components/FourTrack/FourTrack';
import World from './components/World/World';




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
        <Provider store={store}>
          <FourTrack />
          {/* <World /> */}
        </Provider>
      </View>
    );
  }
}
