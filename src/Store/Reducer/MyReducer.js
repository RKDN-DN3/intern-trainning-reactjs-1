import { createSlice, current } from "@reduxjs/toolkit";
const myListSlice = createSlice({
    name: 'myList',
    initialState: {
        allMyList: [
            {
                id: 1,
                name: 'Nam',
                title: '. Life is like a coin. You can spend it anyway you wish, but you only spend it once. – Lillian Dickson.',
                username: 'Lê Quang',
                email: 'hmlm@gmail1.com',
                image: 'https://randomuser.me/api/portraits/men/20.jpg',
                address: ' 198 West 21th Street, Suite 721 New York NY 10016',
                phone: ' 1235 2355 98',
                website: 'Website yoursite.com'
            },
            {
                id: 2,
                name: 'Tú',
                title: 'Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine. – Jack Ma',
                username: 'Nguyễn Minh',
                email: 'hmlm2@gmail.com',
                image: 'https://randomuser.me/api/portraits/women/8.jpg',
                address: ' 198 West 21th Street, Suite 721 New York NY 10016',
                phone: ' 1235 2355 98',
                website: 'Website yoursite.com'
            },
            {
                id: 3,
                name: 'Phong',
                title: 'Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein',
                username: 'Lê Đình',
                email: 'hml3@gmail.com',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                address: ' 198 West 21th Street, Suite 721 New York NY 10016',
                phone: ' 1235 2355 98',
                website: 'Website yoursite.com'
            },
            {
                id: 4,
                name: 'Nhung',
                title: 'Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein',
                username: 'Đặng Thị',
                email: 'hml3@gmail.com',
                image: 'https://randomuser.me/api/portraits/women/2.jpg',
                address: ' 198 West 21th Street, Suite 721 New York NY 10016',
                phone: ' 1235 2355 98',
                website: 'Website yoursite.com'
            }
        ]
    },
    reducers: {
        // addList: (state, action) => {
        //     state.allMyList.unshift({
        //         id: Math.random(),
        //         name: action.payload,
        //         username: action.payload
        //     })
        // }
        addList: {
            reducer(state, action) {
                state.allMyList.unshift(action.payload)
            },
            prepare(name, username, title, email, image) {
                return {
                    payload: {
                        id: Math.random(),
                        name,
                        username,
                        title,
                        email,
                        image
                    }
                }
            }
        },
        // editList: {
        //     // reducer(state, action) {
        //     //     state.allMyList.unshift(action.payload)
        //     // },
        //     // prepare(name, username, title, email){
        //     //     return {

        //     //     }
        //     // }

        //     // allMyList = state.allMyList.map((list) =>
        //     //     id === list.id ? { ...list, name, username, title, email } : list
        //     // )
        // },
        // editList: (state, action) => {
        //     return [...state.allMyList, action.payload]
        // },
        editList: (state, action) => {
            const todoId = action.payload
            // state.allMyList = todoId ? { ...state, todoId } : state
            // console.log('check state:', state.allMyList);
            state.allMyList = state.allMyList.map((todo) => todo.id === todoId.id ? { ...todo, todoId } : todo)
            // state.allMyList = state.allMyList.map((todo) => {
            //     if (todo.id === todoId.id)
            //         return {
            //             ...state.allMyList, todoId
            //         }
            // })
            // return {
            //     ...state,
            //     todoId
            // }
        },
        deleteTodo(state, action) {
            const todoId = action.payload
            state.allMyList = state.allMyList.filter(todo => todo.id !== todoId)
        },
    },
});

//Reducer
const myListReducer = myListSlice.reducer


//Selector
export const myListSelector = state => state.myListReducer.allMyList
//export action
export const { addList, deleteTodo, editList } = myListSlice.actions
export default myListReducer