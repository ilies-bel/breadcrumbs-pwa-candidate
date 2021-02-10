import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';
import useAxios from 'axios-hooks'
import { configure } from 'axios-hooks';

const BASE_API_URL = process.env.AXIOS_BASE_URL
const AVAILABILITY = process.env.AVAILABILITY_API;
const tips = process.env.TIPS_API
const AMBASSADOR = process.env.AMBASSADOR_API;
const PROCESS = process.env.PROCESS_API
const APPOINTMENT = process.env.APPOINTMENT_API

export const useAPI = (path='') => {
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
export const useGetProcess = () => {
    return useAPI(PROCESS);
}


//TODO: Fonctions à compléter en fonctions de l'API mis en place
export const useAppointmentAPI = (path='', data={}, method='get') => {
    return useAxios({
        baseURL: `${BASE_API_URL}/${APPOINTMENT}`,
        method: method,
        url: path,
        data: data
    });
}

export const useCreateAppointment = (data={}) => {
    return useAppointmentAPI(data, 'post')
}
export const useEditAppointment = (id, data={}) => {
    return useAppointmentAPI(`/${id}`, data, 'put')
}
export const useMoveAppointment = (id, data={}) => {
    return useAppointmentAPI(`/${id}`, data, 'put')
}
export const useCancelAppointment = (id, data={}) => {
    return useAppointmentAPI(`/${id}`, data, 'delete')
}