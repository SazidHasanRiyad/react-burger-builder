import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-b9ec3-default-rtdb.firebaseio.com/',
});

export default instance;
