import {createSlice} from '@reduxjs/toolkit'

const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

const initialState = {

    products:savedProducts
}

const productSlice = createSlice({

    name:'products',
    initialState,

    reducers:{

        addProduct:(state,action) =>{

            state.products.push(action.payload);
            localStorage.setItem('products',JSON.stringify(state.products));

        },

        updateProduct:(state,action) =>{

            const index = state.products.findIndex((product) => product.id === action.payload.id);

            if(index !== -1){

                state.products[index] = action.payload;
                localStorage.setItem('products',JSON.stringify(state.products));

            }

        },

        deleteProduct:(state,action)=>{

            console.log("Deleting:", action.payload);

            state.products = state.products.filter((product) => product.id !== action.payload);
            localStorage.setItem('products',JSON.stringify(state.products));

        }



    }



});
export const {addProduct,updateProduct,deleteProduct} = productSlice.actions;
export default productSlice.reducer;