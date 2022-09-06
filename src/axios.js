import axios from "axios";

const instance = axios.create({

    baseURL: "https://api.rhemoviedb.org/3"


})


export default instance;