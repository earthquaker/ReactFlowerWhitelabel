import * as firebase from 'firebase';

export function getKeyFromDomain(){
    return function(dispatch) {

        const id = window.location.hostname.replace(".", "");
        const aliasesRef = firebase.database().ref("aliases");
        const floristRef = firebase.database().ref("florists");

        aliasesRef.once("value", (uid) => {
            const userKey = uid.val()[id];

            floristRef.child(userKey).once("value", (company) => {
                dispatch({
                    type: 'GET_COMPANY',
                    payload: company.val()
                });
            });
        });
    }
}