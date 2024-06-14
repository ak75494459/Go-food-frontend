import React, { createContext, useContext, useReducer } from 'react';

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state , action)=> {
 switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name:action.name,qnt:action.qnt,size:action.size,price:action.price}]
    case "REMOVE":
        let newArr = [...state];
        newArr.splice(action.index,1);
        return newArr;
    case "UPDATE":
        return state.map(food => {
            if (food.id === action.id) {
                console.log(food.qnt, parseInt(action.qnt), action.price + food.price);
                // Modify the properties of the food item
                return {
                    ...food,
                    qnt: action.qnt,
                    price: action.price + food.price // Assuming price is the new price
                };
            }
            return food; // Return unchanged items
        });
    case "DROP":
        let emptyArr = [];
        return emptyArr   
    default:
        console.log("error in reducer");
    }

    
}

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[])

    return(
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);