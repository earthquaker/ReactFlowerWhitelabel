export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_WHITELABEL": {
            state = {...state, ...action.payload};
            return state;
        }
        case "CLEAR_WHITELABEL": {
            state = {};
            return state;
        }
        default:
            return state;
    }
};