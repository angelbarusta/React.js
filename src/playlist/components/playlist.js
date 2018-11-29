//import React, { Component } from 'react';
import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props) { //componente playlist functional
        return (
            <div className="Playlist">
                {
                    props.playlist.map((item)=>{
                       return <Media handleClick={props.handleOpenModal} {...item} key={item.id} />
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