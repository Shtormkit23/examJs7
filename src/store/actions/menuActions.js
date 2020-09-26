import {
    ADD_DISH,
    EDIT_DISH,
    INIT_DISH,
    REMOVE_DISH,
} from "../actionTypes";

export const addDish = () => {
    return {type: ADD_DISH}
};

export const editDish = dishId => {
    return {type: EDIT_DISH, dishId};
};

export const removeDish = dishId => {
    return ({type: REMOVE_DISH, dishId});
};

export const initDish = () => {
    return ({type: INIT_DISH});
};


