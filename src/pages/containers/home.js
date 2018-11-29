import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import handleError from '../../errores/containers/handle-error';
import HandleError from '../../errores/containers/handle-error';

class Home extends Component {
    state = {
        modalVisible:false,
    }
    //----------funcion para abrir el modal de descripciones
    handleOpenModal = () => {
       this.setState({
           modalVisible:true,
       })
    }
    //---------------------------------------------

    //-----funcion para cerrar el modal de descripciones------
    handleCloseModal=(event)=>{
       this.setState({
           modalVisible:false,
       })
    }
    //----------------------------------------------------------
componentDidCatch(error, info) {
    this.setState({
        handleError:true,
    })
}

    render() {
        return (
            <HandleError>
            <HomeLayout>
                <Related />
                  <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
                  {
                      this.state.modalVisible &&
                       <ModalContainer>
                           <Modal handleClick={this.handleCloseModal}>
                             <h1>Esto es un portal</h1>
                           </Modal>
                       </ModalContainer>
                  }
                  
            </HomeLayout>
            </HandleError>
        )
    }
}


export default Home;