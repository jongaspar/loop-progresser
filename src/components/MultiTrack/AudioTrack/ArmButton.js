import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './_styles_AudioTrack';

import { connect } from 'react-redux'

import { armTrackToggle } from '../../../redux/actions';

const ArmButton = (props) => {
  console.log("ArmButton props:", props);
  const { dispatch, isArmed, audioTrackId, multiTrackId } = props
  return (
    <TouchableHighlight
      style={[styles.armButton, { backgroundColor: isArmed ? "tomato" : "grey" }]}
      onPress={() => {
        dispatch(armTrackToggle(audioTrackId, multiTrackId))
      }}
    >
      <Text>
        ARM
      </Text>
    </TouchableHighlight>
  )
}

const mapStateToProps = (state, props) => {
  console.log('in mapStateToProps, props:', props);
  return { isArmed: state[props.multiTrackId][props.audioTrackId].isArmed };
};

export default connect(mapStateToProps)(ArmButton)