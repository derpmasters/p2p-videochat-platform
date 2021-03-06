import React from 'react';
import {Box, Button} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MicOffIcon from '@material-ui/icons/MicOff';
import RoomSidebarMenu from '../RoomSidebarMenu/RoomSidebarMenu';
import MicIcon from '@material-ui/icons/Mic';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import RoomSidebarChat from '../RoomSidebarChat/RoomSidebarChat';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleCameraEnabled, toggleMicrophoneEnabled} from '../../../store/actions/localStream.actions';

// TODO make actionbar modular once gridsystem is in place
const RoomActionbar = ({ localStreamWrapper, dispatch }) => {

  const setAudioIcon = () => {
    if (localStreamWrapper) {
      const audioTrack = localStreamWrapper.stream.getAudioTracks()[0];
      if (audioTrack && audioTrack.enabled) {
        return <MicIcon color='primary' fontSize='large'/>;
      }
    }
    return <MicOffIcon color='primary' fontSize='large'/>;
  };

  const setVideoIcon = () => {
    if (localStreamWrapper) {
      const videoTrack = localStreamWrapper.stream.getVideoTracks()[0];
      if (videoTrack && videoTrack.enabled) {
        return <VideocamIcon color='primary' fontSize='large'/>;
      }
    }
    return <VideocamOffIcon color='primary' fontSize='large'/>;
  };

  return (
    <Box
      bgcolor={'#f5deb3eb'}
      height={'10%'}
      display='flex'
      justifyContent={'center'}
      borderTop={'1px solid #0000003b'}
      alignItems={'center'}
    >
      {/* toggle room menu settings */}
      <RoomSidebarMenu/>

      {/* toggle Microphone audio track */}
      <Button style={{ height: '100%', marginLeft: 'auto' }} onClick={() => dispatch(toggleMicrophoneEnabled())}>
        {setAudioIcon()}
      </Button>

      {/* Navigate to landing page */}
      <Link to={'/'} style={{ height: '100%' }}>
        <Button style={{ height: '100%' }}>
          <HomeIcon color='primary' fontSize='large'/>
        </Button>
      </Link>

      {/* toggle camera video track */}
      <Button style={{ height: '100%', marginRight: 'auto' }} onClick={() => dispatch(toggleCameraEnabled())}>
        {setVideoIcon()}
      </Button>

      {/* toggle chat */}
      <RoomSidebarChat/>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    localStreamWrapper: state.localUser.mediaStream
  };
};

export default connect(mapStateToProps)(RoomActionbar);
