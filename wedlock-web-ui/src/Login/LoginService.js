import CustomAxios from "../Util/CustomAxios";

export const register = (user, callback) => {
    CustomAxios.post(`/user-svc/user/save`, user).then((response) => {
        if (response.data) {
            console.info('registration success', user);
            callback(true)
        }
    }).catch((error) => {
        console.error('registration failed', error);
        callback(false)
    });
}
