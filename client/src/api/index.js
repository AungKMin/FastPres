import axios from 'axios';

const API = axios.create();

// export const test = () => API.get('http://localhost:8000/polls/')

export const test = (newPost) => axios.post('http://localhost:8000/pptx/', newPost, {responseType: 'blob'});