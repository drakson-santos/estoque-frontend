import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getCategories = (id) => {
  let endpoint = `${API_URL}/categories`;
  if (id) endpoint += `/category_id=${id}`;

  return axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getModels = (id) => {
  let endpoint = `${API_URL}/models`;
  if (id) endpoint += `/model_id=${id}`;

  return axios
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const postProduct = (payload) => {
  axios
    .post(`${API_URL}/products`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
