import { AxiosResponse } from 'axios';
import { ResponsetLogin } from 'src/interfaces/backend';
import { getData } from 'src/services';
import configuration from 'src/data/configuration.json';

const { baseUrl, timeout, endpoints } = configuration.authentication;
const { requestProducts } = endpoints;

export const requestLogin = async (): Promise<AxiosResponse<ResponsetLogin>> => {
    return await getData<ResponsetLogin>({
        url: baseUrl + requestProducts, 
        timeout
    });
};