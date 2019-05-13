export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const add = (todo) => {
    return {
        type: ADD_TODO,
        payload: {todo}
    }
};

export const del = (index) => {
    return {
        type: DEL_TODO,
        payload: {index}
    }
};

export const complete = (index) => {
    return {
        type: COMPLETE_TODO,
        payload: {index}
    }
};