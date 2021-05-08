import React, { Component } from 'react';
import Button from './components/Button/Button';
import Container from './components/Container';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import pixabayApi from './services/pixabay.api';

class App extends Component {
  state = {
    galarry: [],
    page: 1,
    largeImageURL: '',
    showModal: false,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchGalarry();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, galarry: [], error: null });
  };

  fetchGalarry = () => {
    const { searchQuery, page } = this.state;
    const options = { searchQuery, page };

    this.setState({ isLoading: true });
    pixabayApi
      .fetchPixabayImgs(options)
      .then(({ data }) => {
        this.setState(prevState => ({
          galarry: [...prevState.galarry, ...data.hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, galarry, isLoading, error } = this.state;
    const shouldShowLoadMoreBtn = galarry.length > 0 && !isLoading;
    return (
      <Container>
        {error && <h1>Try again!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery showGalarry={galarry} />

        {isLoading && <Loader />}
        {shouldShowLoadMoreBtn && <Button onClick={this.fetchGalarry} />}

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
