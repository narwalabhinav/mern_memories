import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (FormData, history) => async(dispatch) => {
    try{
        //log in the user..
        const { data } = await api.signIn(FormData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch(err) {
        console.log(err);
    }
};

export const signup = (FormData, history) => async(dispatch) => {
    try{
        //sign up the user..
        const { data } = await api.signUp(FormData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch(err) {
        console.log(err);
    }
};