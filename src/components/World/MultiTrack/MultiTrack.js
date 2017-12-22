import React, { Component } from "react";
import { TouchableHighlight, View } from 'react-native';

import MasterControlsContainer from '../../../containers/World/MultiTrack/MasterControls/MasterControlsContainer';
import AudioTrackContainer from '../../../containers/World/MultiTrack/AudioTrack/AudioTrackContainer';
import MenuContainer from '../../../containers/World/MultiTrack/Menu/MenuContainer';

import styles from './_styles_MultiTrack';


export default class MultiTrack extends Component {
  constructor(props) {
    super(props)
    this.touchTimeDiff = 0

    this.props.addTrack()
    this.props.addTrack()
    this.props.addTrack()
    this.props.addTrack()

    this.checkDoubleTouch = this.checkDoubleTouch.bind(this)
    this.enterMultiTrackView = this.enterMultiTrackView.bind(this)
  }

  checkDoubleTouch(functionToPerform) {
    if (Date.now() - this.touchTimeDiff < 200) {
      functionToPerform();
    }
    this.touchTimeDiff = Date.now();
  }

  enterMultiTrackView() {
    console.log('You have entered MultiTrackView');
    this.props.scrollToPosition(this.props.multiTrackStatus.position)
  }



  render() {
    const audioTracks = this.props.multiTrackStatus.audioTracks;
    const { position } = this.props.multiTrackStatus;

    console.log('props for MultiTrack.js', this.props);
    return (
      <TouchableHighlight
        onPress={() => this.checkDoubleTouch(this.enterMultiTrackView)}
      >
        <View
          style={[
            styles.main,{
              top: position.y,
              left: position.x,
            }
          ]}
          pointerEvents={ this.props.viewMode === 'MULTI_TRACK' ? 'auto' : 'box-only' }
        >
          <MenuContainer
            scrollToPosition={this.props.scrollToPosition}
          />

          { audioTracks.map((audioTrackData, audioTrackIndex) =>
            <AudioTrackContainer
              {...audioTrackData}
              key={audioTrackData.id} // For React
              id={audioTrackData.id} // Unique identifier for me
              audioTrackIndex={audioTrackIndex} // Index/position in multiTrack array
              multiTrackId={this.props.multiTrackId}
            />
          )}

          <MasterControlsContainer multiTrackId={this.props.multiTrackId} />
        </View>

      </TouchableHighlight>
    )
  }
}
