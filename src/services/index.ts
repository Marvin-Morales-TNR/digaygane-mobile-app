import axios, { AxiosResponse } from 'axios';
import { GetParams, PostParams } from 'src/interfaces/backend';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';

export const getData = async <T>(params: GetParams): 
Promise<AxiosResponse<T>> => {
    const { url, timeout } = params;
    return await axios.get<T>(url, { timeout });
};

export const postData = async <T>(params: PostParams): 
Promise<AxiosResponse<T>> => {
    const { url, timeout, body } = params;
    return await axios.post<T>(url, body, { timeout });
};