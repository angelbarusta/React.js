import React, { Componentes } from 'react';

class Media extends React.Component {
    render() {
        const styles = {
            container: {
                fontSize: 21, // o fontSize:'14px'
                backgroundColor: '#2ECCFA',
                color: 'white', //color del texto
                cursor: 'pointer',
                width:260,
                border: '1px solid blue'
            }
        }
        return (
            <div style={ styles.container}>
              <div>
                  <img src="./imagenes/doky.jpg"
                       alt=""
                       width={260}
                       height={160}
                       />
                       <h3>aprendiendo React...</h3>
                       <p>Angel Barusta</p>
              </div>
            </div>
        )
    }
}

export default Media;