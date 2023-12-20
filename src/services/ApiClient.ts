import axios, { AxiosRequestConfig } from "axios";


const axiosClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        "key": "4fad66bf601f4ead97e1493e171514fe"
    }
})

export interface GetResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

class ApiClient<T>{
    route: string;

    constructor(route: string){
        this.route = route;
    }

    async get(config?: AxiosRequestConfig){
        return axiosClient.get<GetResponse<T>>(this.route, config)
        .then(response => response.data)
    }

    async getGame(id: string | number) {
        return axiosClient.get<T>(`${this.route}/${id}`).then(response => response.data);
    }
        
    async post(config?: AxiosRequestConfig){
        return axiosClient.post<GetResponse<T>>(this.route, config)
        .then(response => response.data)
    }
}

export default ApiClient;
