import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://airbnb-clone-fjbl.onrender.com",
    withCredentials:true
})

export default apiRequest;