export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_COMPANY": {
            state = action.payload;
            return state;
        }
        case "CLEAR_COMPANY": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};