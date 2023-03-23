import { createSlice } from '@reduxjs/toolkit';



const cardSlice = createSlice({
    initialState: [],
    name: 'cardSlice',
    reducers: {
        addToCard: (state, action) => {
            const findedProduct = state.find((product) => product.id === action.payload.id );
            if (findedProduct) {
                findedProduct.quantity +=1;

            } else {
                const productClone={...action.payload,quantity:1};
                state.push(productClone);
            }

        },
        removeFromCard: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id);
        },
        clear: (state, action) => { return []; },
        getCard: (state, action) => { return action.payload; }
    },


});
export const { addToCard, removeFromCard, clear } = cardSlice.actions;
export default cardSlice.reducer;