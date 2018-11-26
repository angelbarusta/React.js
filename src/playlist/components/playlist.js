//import React, { Component } from 'react';
import React from 'react';
import Media from './media.js';
import './playlist.css';
import Play from '../../icons/components/play';



function Playlist(props) { //componente playlist functional
    const playlist = props.data.categories[0].playlist
        console.log(props.data);
        return (
            <div className="Playlist">
            <Play
               size={100}
               color="#00FFFF"
             />
                {
                    playlist.map((item)=>{
                       return <Media {...item} key={item.id} />
                    })
                }
                
            </div>
        )
}


export default Playlist;







/*class Playlist extends Component {
    render() {
        const playlist = this.props.data.categories[0].playlist
        console.log(this.props.data);
        return (
            <div className="Playlist.css">
                {
                    playlist.map((item)=>{
                       return <Media {...item} key={item.id} />
                    })
                }
                
            </div>
        )
    }
}

export default Playlist;*/