import * as types from "../constants";

export const toggleTheme = () => {
    return async (dispatch) => {
        dispatch({ type: types.SHOW_MODAL });
    };
};