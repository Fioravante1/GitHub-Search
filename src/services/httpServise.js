import axios from 'axios';

const axiosInstancia = axios.create({
  baseURL: 'https://api.github.com/users',
});

async function requestApi(url) {
  try {
    const { data } = await axiosInstancia.get(url);
    return data;
  } catch (err) {
    return [];
  }
}

export default requestApi;
