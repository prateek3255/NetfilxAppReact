import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
  } from 'react-native';
  
  import Video from 'react-native-video';
  
  export default class VideoPlayer extends Component {
  
    static navigationOptions = {
        header: null
      };
    state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      paused: false,
    };
  
    video: Video;
  
    onLoad = (data) => {
      this.setState({ duration: data.duration });
      
    };
  
    onProgress = (data) => {
      this.setState({ currentTime: data.currentTime });
    };
  
    onEnd = () => {
      this.setState({ paused: true })
      this.video.seek(0)
    };
  
    onAudioBecomingNoisy = () => {
      this.setState({ paused: true })
    };
  
    onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
      this.setState({ paused: !event.hasAudioFocus })
    };
  
    getCurrentTimePercentage() {
      if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      }
      return 0;
    };
  
  
    render() {
      const flexCompleted = this.getCurrentTimePercentage() * 100;
      const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
  
      return (
        <View style={styles.container}>
            <StatusBar
          hidden
        />
          <TouchableOpacity
            style={styles.fullScreen}
            onPress={() => this.setState({ paused: !this.state.paused })}
          >
            <Video
              ref={(ref: Video) => { this.video = ref }}
              /* For ExoPlayer */
              /* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */
              source={require('../../../assets/OP6.mp4')}
              style={styles.fullScreen}
              rate={this.state.rate}
              paused={this.state.paused}
              volume={this.state.volume}
              muted={this.state.muted}
              resizeMode={this.state.resizeMode}
              onLoad={this.onLoad}
              onProgress={this.onProgress}
              onEnd={this.onEnd}
              onAudioBecomingNoisy={this.onAudioBecomingNoisy}
              onAudioFocusChanged={this.onAudioFocusChanged}
              repeat={true}
            />
          </TouchableOpacity>
  
          <View style={styles.controls}>

  
            <View style={styles.trackingControls}>
              <View style={styles.progress}>
                <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    fullScreen: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    controls: {
      backgroundColor: 'transparent',
      borderRadius: 5,
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
    },
    progress: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 3,
      overflow: 'hidden',
    },
    innerProgressCompleted: {
      height: 20,
      backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
      height: 20,
      backgroundColor: '#2C2C2C',
    },
    generalControls: {
      flex: 1,
      flexDirection: 'row',
      borderRadius: 4,
      overflow: 'hidden',
      paddingBottom: 10,
    },
    rateControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    volumeControl: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    resizeModeControl: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    controlOption: {
      alignSelf: 'center',
      fontSize: 11,
      color: 'white',
      paddingLeft: 2,
      paddingRight: 2,
      lineHeight: 12,
    },
  });