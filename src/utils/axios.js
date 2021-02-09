import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import useAxios from 'axios-hooks'
import { configure } from 'axios-hooks';

const BASE_API_URL = process.env.AXIOS_BASE_URL
const AVAILABILITY = process.env.AVAILABILITY_API;
const tips = process.env.TIPS_API
const AMBASSADOR = process.env.AMBASSADOR_API

export const useAPI = (path) => {
    return useAxios({
        baseURL: BASE_API_URL,
        url: path
    })
}
export const useGetDisponibilities = () => {
    return useAPI(AVAILABILITY)
}
export const useGetTips = () => {
    return useAPI(tips);
}
export const useGetAmbassador = () => {
    return useAPI(AMBASSADOR);
}