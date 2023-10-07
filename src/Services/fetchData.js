import axios from 'axios';
const limit = 8;

axios.defaults.baseURL = 'https://65218c36a4199548356d5ab9.mockapi.io';

export async function fetchData(page) {
  try {
    const { data } = await axios.get(`/advert/?limit=${limit}&page=${page}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchData;
