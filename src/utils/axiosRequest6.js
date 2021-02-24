import axios from "axios";

const BASE_API_URL = process.env.AXIOS_BASE_URL
const AVAILABILITY = process.env.AVAILABILITY_API;
const tips = process.env.TIPS_API
const AMBASSADOR = process.env.AMBASSADOR_API;
const PROCESS = process.env.PROCESS_API
const APPOINTMENT = process.env.APPOINTMENT_API
const INTERVIEW_TYPE = process.env.INTERVIEW_TYPE;
const COLLABORATOR_TOKEN = process.env.COLLABORATOR_TOKEN

export async function loginRequest(email, password) {
    return await axios.post(`${BASE_API_URL}/users/login`, {"user":{"email":email, "password":password}})
        .then(res => res.data.json )
}

export async function registrationRequest() {
    return await axios.post(`${BASE_API_URL}/users`)
}