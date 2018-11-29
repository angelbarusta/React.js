import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';

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
    render() {
        return (
            <HomeLayout>
                <Related />
                  <Categories 
                     categories={this.props.data.categories} 
                     handleOpenModal={this.handleOpenModal}
                     />
                     {//si la condicion se cumple has lo de las llaves
                         this.state.modalVisible &&  //si se cumple la condicion
                  
                       <ModalContainer>
                           <Modal 
                               handleClick={this.handleCloseModal}
                            >
                             <h1>Esto es un portal</h1>
                           </Modal>
                       </ModalContainer>
                  }
            </HomeLayout>
        )
    }
}


export default Home;