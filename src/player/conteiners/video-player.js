import React,{ Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout.js' ;
import Video from '../components/Video';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timmer';
import ControlVideo from '../components/video-player-control.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner';
import Volumen from '../components/volumen.js';

class VideoPlayer extends Component {
 //--------------------------estados iniciales---------------------------------------------------------------------------------------------------------------------------   
    state = {
        pause: true,  // de claramos un estado inicial
        duration: 0,
        currentTime:0,
        loading: false,
        lastVolumeState: null,
	    volume: 1,
    }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    togglePlay = (event)=> {
        this.setState({
            pause: (!this.state.pause ) // a qui declaramos que cambie el estado al inverso del original
        })
    }
//---------------------------------verifica si existe una actualizacion--------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay), // si se cumple esta condicion mansara true, si no mandara false
            
        })
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
        duration: this.video.duration
    });
}
handleTimeUpdate = event => {
   // console.log(this.video.currentTime)
    this.setState({
        currentTime: this.video.currentTime
    });
}
handleProgressChange = event => {
    //event.target.value
    this.video.currentTime = event.target.value
    
}
handleSeekind = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumenChange =event => {
    this.video.volume = event.target.value  //el .volume nos dara la funcion del volumen
  }

  mute = ()  => {
    const lastState = this.video.volume
    this.setState({
      lastVolumeState: lastState,
      volume: 0
    })
    this.video.volume = 0
  }

  unmute = () => {
    this.setState({
      volume: this.state.lastVolumeState
    })
    this.video.volume = this.state.lastVolumeState
  }

  handleVolumeMute = event => {
    console.log(this.video.volume)
    this.video.volume !== 0 ? this.mute() : this.unmute()
    console.log(this.video.volume)
  }

    render() {
        return(
            <VideoPlayerLayout>
                <Title 
                   title="Este es el video"
                />
                <ControlVideo>

                   <PlayPause 
                   pause={this.state.pause} // mandamos la propiedad del estado de pause
                   handleClick={this.togglePlay}
                   />
                   <Timer
                     duration={this.state.duration}
                     currentTime={this.state.currentTime}
                   />
                   <ProgressBar
                     duration={this.state.duration}
                     value={this.state.currentTime}
                     handleProgressChange={this.handleProgressChange}
                   />
                   <Volumen
                     handleVolumenChange={this.handleVolumenChange}
                     handleClick={this.handleVolumeMute}
			         value={this.state.volumen}
                   />

                </ControlVideo>

                <Spinner 
                  active={this.state.loading}
                />
                 <Video
                   autoplay={this.props.autoplay}
                   pause={this.state.pause}
                   handleLoadedMetadata={this.handleLoadedMetadata}
                   handleTimeUpdate={this.handleTimeUpdate}
                   handleSeekind={this.handleSeekind}
                   handleSeeked={this.handleSeeked}
                   src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
            </VideoPlayerLayout>
        )

    }
}

export default VideoPlayer;

