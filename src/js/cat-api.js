import axios from 'axios';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_pPAkKkumd8TIFxdSnrjgpKaOVSkt7rCCTlTF2VuborcOlu1pfHGcUjS6WeBU1zhN';

function fetchBreeds() {
  return axios.get('/breeds').then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.data;
  });
}

export { fetchBreeds, fetchCatByBreed };
