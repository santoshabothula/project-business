import CustomAxios from "../../Util/CustomAxios";
import { TOCKEN } from "./types";

export const login = (username, password, successCallback) => dispatch => {
    
    const req = { username, password }

    CustomAxios.post(`/user-svc/user/login`, req).then((response) => {
        if (response.data) {
            dispatch({
                type: TOCKEN,
                tocken: response.data
            }); 
            successCallback();
        }
    }).catch((error) => {
        console.error('login failed', error);
    });
}
