const { USER , TOCKEN, REFRESH_TOCKEN } = require("./types");

const initialState = {
    user: {},
    token: '',
    refreshToken: ''
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOCKEN:
            return { ...state, token: action.token };
        case REFRESH_TOCKEN:
            return { ...state, refreshToken: action.refreshToken };
        case USER: 
            return { ...state, user: action.user };
        default: 
            return state;
    }
}

export default LoginReducer;