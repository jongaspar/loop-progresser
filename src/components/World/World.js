import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MultiTrackContainer from '../../containers/World/MultiTrack/MultiTrackContainer';
import styles from './_styles_World';

const multiplierMain = 1.2
const multiplierMap = 8

export default class World extends Component {

  componentDidMount() {
    console.log('this.refs.sv', this.refs.sv);

    this.refs.scrollView.scrollTo({
      // Need to change this to actually get the x and y of the specific multiTrack:
      x: Dimensions.get('screen').width * multiplierMap * multiplierMain / 2 - Dimensions.get('screen').width / 2,
      y: Dimensions.get('screen').height * multiplierMap * multiplierMain / 2 - Dimensions.get('screen').height / 2,
      animated: false
    })
  }

  render() {
    console.log(Dimensions.get('screen'))
    return (
      <ScrollView
        contentContainerStyle={styles.main}
        maximumZoomScale={1.0}
        minimumZoomScale={0.1}
        horizontal
        ref='scrollView'
      >
        <View
          style={styles.map}
        >

          <MultiTrackContainer />

        </View>
      </ScrollView>
    )
  }
}