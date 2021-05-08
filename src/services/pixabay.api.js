import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=20667195-d8cc0b45a3716479e33d72c4b&q=flower';
const API_KEY = '20667195-d8cc0b45a3716479e33d72c4b';

const fetchPixabayImgs = ({ query, page }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchPixabayImgs };
