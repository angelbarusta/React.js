import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
    render() {
        //return createPortal(que voy a renderizar, a donde voy a renderizar)
        return createPortal(this.props.children, document.getElementById('modal-container'))
    }
}
export default ModalContainer;