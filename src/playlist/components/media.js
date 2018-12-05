import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends PureComponent {
    state = { // stage-2
        author: this.props.author,// aqui se descargan datos de author de la api para poder modificarlas
    }
//------------------------------------------------------------
   handleClick = (event) => { //  stage-2
        this.props.openModal(this.props);
      }
//--------------------------------------------------------------
    render() {
        const styles = {
            container: {
                color: '#1C1C1C', //color del texto
                cursor: 'pointer',
                width:260,
                border: '1px solid blue',
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
              <div className="Media-cover">
                  <img 
                       src={this.props.cover}
                       alt=""
                       width={260} //ancho de imagenes
                       height={160}//alto de imagenes
                       className="Media-image"
                       />
                       <h3 className="Media-title">{this.props.title}</h3>
                       <p className="Media-author">{this.state.author}</p>
              </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio']),
}

export default Media;