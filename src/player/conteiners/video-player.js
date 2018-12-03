import React,{ Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout.js' ;
import Video from '../components/Video';
import Title from '../components/title.js';

class VideoPlayer extends Component {
    render() {
        return(
            <VideoPlayerLayout>
                <Title 
                   title="Este es el video"
                />
                <Video
                   autoplay={false}
                   src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )

    }
}

export default VideoPlayer;

