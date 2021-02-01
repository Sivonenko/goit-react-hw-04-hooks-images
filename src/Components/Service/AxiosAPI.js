import axios from 'axios';

const axiosApiWithQuery = (query, pageNumber) => {
  const api_key = '&key=19529322-34fbdd4595b880ec9c46328b0';
  const base_url = 'https://pixabay.com/api/';
  const parametrs = `?image_type=photo&orientation=horizontal&q=`;
  const per_page = `&per_page=12`;
  const page = `&page=${pageNumber}`;

  return axios
    .get(base_url + parametrs + query + page + per_page + api_key)
    .then(response => response.data.hits);
};
const api = { axiosApiWithQuery };
export default api;
