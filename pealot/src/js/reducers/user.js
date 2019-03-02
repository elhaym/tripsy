const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload;
        default:
            return state;
    }
};

/**  export function getUser(payload) {
    return { type: "GET_USER", payload }
};
*/

export default user;