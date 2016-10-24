export function getWhitelabelData(id) {
    return function(dispatch) {
        const whitelabel = firebase.database().ref('whitelabel').child(id);
        whitelabel.once('value', (snap) => {
            dispatch({
                type: 'GET_WHITELABEL',
                payload: snap.val()
            });
        });
    }
}