
import { createAction } from '@reduxjs/toolkit';

export const editList = createAction('editList', ({ data }) => {
    return {
        payload: data,
    };
});


// export const addList = (data) => {
//     return {
//         type: 'addList',
//         payload: data
//     }
// }
// export const editList = (list) => {
//     return {
//         type: 'editList',
//         payload: list
//     }
// }
// export const deleteTodo = (value) => {
//     return {
//         type: 'deleteTodo',
//         payload: value
//     }
// }


