import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    cards:[]
};
const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers:
    {
        addCard:(state, action)=>{
            const card = {
                id : nanoid(),
                text : action.payload,
                // description : action.payload.description,
                // image : action.payload
            }
            state.cards.push(card)
        },
        removeCard:(state, action)=>{
            state.cards = state.cards.filter((card)=>(card.id!==action.payload))
        },
    }
});
export const {addCard, removeCard} = cardSlice.actions;
export default cardSlice.reducer;