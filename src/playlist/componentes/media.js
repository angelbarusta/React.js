import React, { Componentes } from 'react';
import './media.css';
class Media extends React.Component {

   /* constructor(props) {  //es2015
        super(props)
        this.state = {
            author: props.author
        }
        //this.handleClick = this.handleClick.bind(this);
    }*/
//----------------------------------------------------------
    state = { // stage-2
        author: 'Angel Barusta',
    }
//------------------------------------------------------------
//------------------------------------------------------------
    handleClick = (event) => { //  stage-2
        //console.log(this.props.title)

        //funsion para cambiar el state
        this.setState({
            author: 'Angel varusta',
        })
        //------------------------------
    }
//--------------------------------------------------------------
    render() {
        const styles = {
            container: {
                fontSize: 21, // o fontSize:'14px'
                backgroundColor: '#2ECCFA',//#2ECCFA
                color: 'white', //color del texto
                cursor: 'pointer',
                width:260,
                border: '1px solid blue',
                
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
              <div>
                  <img src={this.props.image}
                       alt=""
                       width={260}
                       height={160}
                       className="Media-image"
                       />
                       <h3 className="Media-title">{this.props.title}</h3>
                       <p className="Media-title">{this.state.author}</p>
              </div>
            </div>
        )
    }
}

export default Media;