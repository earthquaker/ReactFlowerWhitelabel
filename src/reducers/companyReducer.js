export default function reducer(state={
    settings_account: {
        name: null
    }
}, action) {
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