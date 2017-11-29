import * as ActionTypes from './actionTypes.js';

export const checkName = (e) => ({
    type: ActionTypes.CHECKNAME,
    val:e.target.value
});

export const checkPassword = (e) => ({
    type: ActionTypes.CHECKPASSWORD,
    val:e.target.value
});

export const appendObj = (obj) => ({
    type: ActionTypes.APPENDOBJ,
    obj:obj
});

export const checkLoading = (flag) => ({
    type: ActionTypes.CHECKLOADING,
    load:flag
});
