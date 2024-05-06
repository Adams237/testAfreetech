import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name:'student',
    initialState:{
        value:[]
    },
    reducers:{
        createStude(state, action){
            state.value=[]
            state.value.push(action.payload)
        }
    }

})
export const {createStude} = studentSlice.actions; 

export default studentSlice.reducer