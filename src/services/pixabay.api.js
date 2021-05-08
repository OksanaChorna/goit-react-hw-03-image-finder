import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20667195-d8cc0b45a3716479e33d72c4b';

const fetchPixabayImgs = ({ searchQuery = '', page = 1 }) => {
  return axios.get(
    `${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
