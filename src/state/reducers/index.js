import { combineReducers } from "redux";
import userFormReducer from "./userFormReducer";

const reducers = combineReducers({
    userForm: userFormReducer
});

export default reducers;