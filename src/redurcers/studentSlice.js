import { createSlice } from '@reduxjs/toolkit'
const language = window.navigator.userLanguage || window.navigator.language
console.log(language)
export const studentSlice = createSlice({
    name:'student',
    initialState:{
        value:[],
        language:language
    },
    reducers:{
        createStude(state, action){
            state.value=[]
            state.value.push(action.payload)
        },
        updateLanguage(state,action){
            state.language = action.payload
        },
        deconecter(state){
            state.value=[]
        }
    }

})
export const {createStude, updateLanguage, deconecter} = studentSlice.actions; 

export default studentSlice.reducer