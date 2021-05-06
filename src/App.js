import React, { Component } from 'react';
import Button from './components/Button/Button';

import Container from './components/Container';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

class App extends Component {
  state = {
    imgList: [],
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showImgList = () => {};

  render() {
    const { showModal, imgList } = this.state;
    return (
      <Container>
        <Searchbar />
        {/* перевірка чи є картинки, а потім показувати кнопку Ще */}
        {imgList.length !== 0 && <Button onClick={this.showImgList} />}

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
