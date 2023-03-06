export default function reducer(state, action){
    if(action.type === "DECREMENT"){
        const ArrData = state.items.map((data)=>{
            if(data.id === action.payload){
                let decreCount = data.qnty - 1;

                if(decreCount <= 0){
                    decreCount = 0;
                }

                return {...data, qnty:decreCount};
            }else{
                return data;
            }
        });
        return {...state, items:ArrData};
    }


    if(action.type === "INCREMENT"){
        const newData = state.items.map((items)=>{
            if(items.id === action.payload){
                let increCount = items.qnty + 1;

                if(increCount > items.max_qnty){
                    increCount = items.max_qnty;
                }

                return {...items, qnty:increCount};
            }else{
                return items;
            }
        });
        return {...state, items:newData};
    }


    if(action.type === "DELETE"){
        let updatedItem = state.items.filter((data) => data.id !== action.payload);
        return {...state, items:updatedItem};
    }

    if(action.type === "UPDATECOUNT"){
        let updatedCount = state.items.reduce((initialValue, currVal)=>{
            let {qnty} = currVal;
            initialValue = initialValue + qnty;
            return initialValue;
        },0);
        return {...state, TotalCartQnty:updatedCount };
    }

    if(action.type === "RESET"){
        let resetData = state.items.map((data)=>{
            let resetQnty = data.qnty;
                resetQnty = 0;
            return {...data, qnty:resetQnty};
        });
        return {...state, items:resetData};
    }
}