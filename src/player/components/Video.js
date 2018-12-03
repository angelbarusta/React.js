import React, { Component } from 'react';
import './video.css'
class Video extends Component {
    togglePlay(){
        if (this.props.pause){
      this.video.play()
       }else {
           this.video.pause()
       }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pause !== this.props.pause){
            this.togglePlay();
        }
    }

    setRef = element => {
        this.video = element;
    }

    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeekind,
            handleSeeked,
        } = this.props;
        return(
            <div className="Video">
                <video                            //elemento html de video donde le mandamos play
                  autoPlay={this.props.autoplay}
                  src={this.props.src}
                  ref={this.setRef}
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                  onSeeking={handleSeekind}                    // me estoy moviendo
                  onSeeked={handleSeeked}                  // ya me movi
               />
            </div>
        )
    }
}
export default Video;