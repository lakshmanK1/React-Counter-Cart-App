import React, { createContext, useReducer, useEffect} from 'react';
import reducer from './Reducer';

export const ContextStore = createContext();

const DummyData = [
    {id:1, qnty:0, max_qnty:8},
    {id:2, qnty:0, max_qnty:8},
    {id:3, qnty:0, max_qnty:8},
    {id:4, qnty:0, max_qnty:8}
];

const initialState = {
    items : DummyData,
    TotalCartQnty : 0
}

function ContextProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({type:'UPDATECOUNT'});
    },[state.items]);


    const IncreCounter = (id) => {
        dispatch({type:"INCREMENT", payload:id});
    }

    const DecreCounter = (id) => {
        dispatch({type:"DECREMENT", payload:id});
    }

    const deleteItem = (id) => {
        dispatch({type:"DELETE", payload:id});
    }

    const contextData = {
        itemsArr : state.items,
        totalQnty : state.TotalCartQnty,
        incrementCount : IncreCounter,
        decrementCount : DecreCounter,
        removeItem : deleteItem
    }



    return (
        <ContextStore.Provider value={contextData}>
            {props.children}
        </ContextStore.Provider>
    );
}
export default ContextProvider;