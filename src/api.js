const API_KEY = '27144211-7692123c331450892536fcf0f';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(requestKey, page) {
  const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;