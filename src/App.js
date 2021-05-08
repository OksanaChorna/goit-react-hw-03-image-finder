import React, { Component } from 'react';
import Button from './components/Button/Button';
import axios from 'axios';
import Container from './components/Container';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20667195-d8cc0b45a3716479e33d72c4b';

class App extends Component {
  state = {
    galarry: [],
    page: 1,
    showModal: false,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGalarry();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, galarry: [] });
  };

  fetchGalarry = () => {
    const { searchQuery, page } = this.state;
    axios
      .get(
        `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => {
        this.setState(prevState => ({
          galarry: [...prevState.galarry, ...data.hits],
          page: prevState.page + 1,
        }));
        //   .catch(error => {
        //   console.log(error);
        // });
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  // showMoreGalarry = () => {};

  render() {
    const { showModal, galarry } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ul>
          {this.state.galarry.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id}>
              {' '}
              <img src={webformatURL} alt="img" />
            </li>
          ))}
        </ul>

        {/* перевірка чи є картинки, а потім показувати кнопку Ще */}
        {galarry.length !== 0 && <Button onClick={this.fetchGalarry} />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
