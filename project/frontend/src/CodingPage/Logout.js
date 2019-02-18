import React from 'react'
import Modal from 'react-responsive-modal'
import styled from 'styled-components'

const ModalHeader = styled.div`
    border: 2px solid black;
    height:2vh;
    width:100%;

`;     



class Logout extends React.Component{
    state = {
        open: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
     
      render() {
        const { open } = this.state;
        return (
          <div>
            <button onClick={this.onOpenModal}>Log Out</button>
            <Modal open={open} onClose={this.onCloseModal} classNames="">
                <ModalHeader>

                </ModalHeader>
            </Modal>
          </div>
        )
      }


}

export default Logout