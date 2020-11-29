import {combineReducers} from "redux";
import {SET_IS_AUTH} from "./actions"

const defaultStateAuth = {
    isAuth: false,
};

export const authReducer = (state = defaultStateAuth, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
    }
    return state;
};

export default combineReducers({
    auth: authReducer,
});