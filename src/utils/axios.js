import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import useAxios from 'axios-hooks'
import { configure } from 'axios-hooks';

const axios_instance = axios.create({
    baseURL: 'http://localhost:8081'
  })
  configure({ axios_instance }) 

const pe = process.env;
const availability = pe.AVAILABILITY_API;

export const useAPI = (path) => {
    return useAxios({
        baseURL: process.env.AXIOS_BASE_URL,
        url: path
    })
}
export const useGetDisponibilities = () => {
    return useAPI('/disponibilities')
}
export const useGetTips = () => {
    useAPI({
        url: '/tips'
    })
}