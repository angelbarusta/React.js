import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal-container';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errores/containers/handle-error';
import VideoPlayer from '../../player/conteiners/video-player';


class Home extends Component {
    state = {
        modalVisible:false,
    }
    //----------funcion para abrir el modal de descripciones
    handleOpenModal = (media) => {
       this.setState({
           modalVisible:true,
           //media:media, o media
           mediavideo:media,
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
                 
                  <Categories 
                     categories={this.props.data.categories}
                     handleOpenModal={this.handleOpenModal}
                  />
                  {
                      this.state.modalVisible &&
                       <ModalContainer>
                           <Modal 
                             handleClick={this.handleCloseModal}
                            >
                              <VideoPlayer
                                 autoplay
                                 src={this.state.mediavideo.src}
                                 title={this.state.mediavideo.title}
                              />

                           </Modal>

                       </ModalContainer>
                  }
                  
            </HomeLayout>
            </HandleError>
        )
    }
}


export default Home;