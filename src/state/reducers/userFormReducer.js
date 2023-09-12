import ActionType from "../action-types";

const initialState = {
    loading: false,
    userName: '',
    userSurname: '',
    userTopic: '',
    userImage: ''
};

const userFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.SEARCH_START:
            return {...state, loading: true}
        case ActionType.SEARCH_IMAGE:
            return {...state, loading: false, userImage: action.payload.userImage, userTopic: action.payload.userTopic}
        case ActionType.UPDATE_USER_NAME:
            return {...state, loading: false, userName: action.payload}
        case ActionType.UPDATE_USER_SURNAME:
            return {...state, loading: false, userSurname: action.payload}
        default:
            return state;
    }
};

export default userFormReducer;