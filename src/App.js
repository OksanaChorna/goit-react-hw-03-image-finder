import React, { Component } from 'react';

import Container from './components/Container';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello</h1>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
