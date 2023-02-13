import { createSlice } from "@reduxjs/toolkit";
const myListSlice = createSlice({
    name: 'myList',
    initialState: {
        allMyList: [
            {
                id: 1,
                name: 'Nam',
                title: '. Life is like a coin. You can spend it anyway you wish, but you only spend it once. – Lillian Dickson.',
                username: 'Lê Quang',
            },
            {
                id: 2,
                name: 'Tú',
                title: 'Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine. – Jack Ma',
                username: 'Nguyễn Minh',
                img: '../../Components/access/avatar2.jpg'
            },
            {
                id: 3,
                name: 'Phong',
                title: 'Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein',
                username: 'Lê Đình',
                img: '../../Components/access/avatar3.jpg'
            }
        ]
    },
    reducers: {
        addList: (state, action) => {
            state.allMyList.unshift({
                id: Math.random(),
                name: action.payload,
                username: action.payload
            })
        }
    }
})

//Reducer
const myListReducer = myListSlice.reducer


//Selector
export const myListSelector = state => state.myListReducer.allMyList
//export action
export const { addList } = myListSlice.actions
export default myListReducer