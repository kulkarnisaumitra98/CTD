import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'reactstrap';
import {Link,withRouter} from 'react-router-dom'
class LogOut extends React.Component {
  state = {
    modalIsOpen: false,
  }
  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }
  render() {
    return (
      <div>
        <Button color='danger' style={{width:"8vw"}} onClick={this.toggleModal.bind(this)}>LOG OUT</Button>
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>LOG OUT</ModalHeader>
          <ModalBody>
          DO YOU WANT TO LOG OUT?
          </ModalBody>
          <ModalFooter>
           <Link to="/Result"><Button color='danger' style={{boxShadow:"2px 2px black"}}>LOG OUT</Button></Link> 
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(LogOut)