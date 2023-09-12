import * as actionCreators from '../state/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
};