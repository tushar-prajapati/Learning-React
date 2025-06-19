const initialState = {count:0};

const counterReducer = (state, action) =>{
    switch (action.type) {
        case "increment":
            return {count: state.count+1}
            break;
        case "decrement":
            return {count: state.count-1}
            break;
        case "incrementByAmount":
            return {count: state.count+ action.payload}
            break;
        case "decrementByAmount":
            return {count: state.count- action.payload}
            break;
            
    
        default:
            return state;
            break;
    }
}

export {initialState, counterReducer}