import React, {
    Component
  } from 'react';
  
  import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    ActivityIndicator,
  } from 'react-native';

  import {Icon, Button} from 'native-base';
  
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
      loader:true,
      showIcon:false,
      icon:"ios-pause"
    };
  
    video;
  
    onLoad = (data) => {
      this.setState({ duration: data.duration });
      this.setState({loader:false})
      
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
  
    onAudioFocusChanged = (event) => {
      this.setState({ paused: !event.hasAudioFocus })
    };
  
    getCurrentTimePercentage() {
      if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
      }
      return 0;
    };

    touchablePress=()=>{
        // this.setState({
        //   showIcon:!this.state.showIcon
        // } )
        // setTimeout(()=>{
        //   this.setState({
        //     showIcon:!this.state.showIcon
        //   } )
        // },2500 )
        if(!this.state.showIcon){
          this.setState({
            showIcon:true
          },()=>{
            setTimeout(()=>{
          this.setState({
            showIcon:false
          } )
        },2500 )
          })
        }
        else{
          this.setState({
            showIcon:false
          })
        }
    }

    toggle=()=>{
      this.setState({
        paused:!this.state.paused,
      } )
      if (this.state.icon === "ios-play"){
        this.setState({
          icon:"ios-pause"
        } )
      }
      else {
        this.setState({
          icon:"ios-play"
        } )
      }
    }
  
  
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
            onPress={this.touchablePress}
          >
            <Video
              ref={(ref) => { this.video = ref }}
              /* For ExoPlayer */
               source={{ uri: 'https://pixabay.com/en/videos/download/video-14815_medium.mp4', type: 'mp4' }} 
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
          <View>
        
            {this.state.loader && (
              <ActivityIndicator
                style={{ height: 80 }}
                color="#C00"
                size="large"
              />
            )}
            
            {!this.state.loader && this.state.showIcon && (
              <Button transparent onPress={this.toggle}>
              <Icon name={this.state.icon} style={{color:'white', fontSize:50}}  />
              </Button>
            )}

           
          </View>
         
         { !this.state.loader &&  this.state.showIcon &&
          (<View style={styles.controls}>

  
            <View style={styles.trackingControls}>
              <View style={styles.progress}>
                <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
                <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
              </View>
            </View>
          </View>)
         }
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