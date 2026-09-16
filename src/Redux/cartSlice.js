import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("carts")) || [];

const initialState = {
    cartItems:savedCart
};

const cartSlice = createSlice({

    name:"carts",
    initialState,

    reducers:{
        
        //addtocart 
        addToCart:(state,action) =>{

            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            )
            
            if(existingItem){
                existingItem.quantity += 1;

            }else{

                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });

            }

            localStorage.setItem(
                "cart",JSON.stringify(state.cartItems)
            );
        },

        increaseQuanitity:(state,action) =>{

            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if(item){
                item.quantity += 1;
            }

            localStorage.setItem(
                "carts",JSON.stringify(state.cartItems)
            );

        },

        decreaseQuantity:(state,action) =>{

            const item = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if(item && item.quantity > 1){
                item.quantity -= 1
            }

            localStorage.setItem(
                "carts",JSON.stringify(state.cartItems)
            )

        },

        removeFromCart:(state,action) =>{

            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );

            localStorage.setItem(
                "carts",JSON.stringify(state.cartItems)
            );

        },
        
        clearCart:(state) =>{

            state.cartItems = [];

            localStorage.removeItem("carts")

        }



    }

});

export const {addToCart,increaseQuanitity,decreaseQuantity,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;