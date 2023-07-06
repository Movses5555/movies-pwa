import axios from 'axios';

export const ApiKey:string = '2fa39d09'
export const Type:string = 'movie'

const axiosInstance = () => {
  return axios.create({
    baseURL: 'https://www.omdbapi.com/'
  })
}

export default axiosInstance;
