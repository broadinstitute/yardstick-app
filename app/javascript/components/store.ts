import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

export const authenticateAction = createAction<string>("authenticate");

export type State = {
    token: null | string;
};

const state: State = {
    token: null,
};

const reducer = createReducer(state, {
    ["authenticate"]: (state, action) => {
        state.token = action.payload;
    },
});

export const store = createStore(reducer, composeWithDevTools());
