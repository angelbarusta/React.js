import React,{ Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout.js' ;
import Video from '../components/Video';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
class VideoPlayer extends Component {

    state = {
        pause: true,  // de claramos un estado inicial
    }

    togglePlay = (event)=> {
        this.setState({
            pause: (!this.state.pause ) // a qui declaramos que cambie el estado al inverso del original
        })
    }
//---------------------------------verifica si existe una actualizacion--------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay) // si se cumple esta condicion mansara true, si no mandara false
        })
    }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    render() {
        return(
            <VideoPlayerLayout>
                <Title 
                   title="Este es el video"
                />
                <PlayPause 
                   pause={this.state.pause} // mandamos la propiedad del estado de pause
                   handleClick={this.togglePlay}
                />
                <Video
                   autoplay={this.state.autoplay}
                   pause={this.state.pause}
                   src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )

    }
}

export default VideoPlayer;

