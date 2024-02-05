import { createReducer } from "@reduxjs/toolkit";
import { CHECK_USER, ADD_NOTE, DELETE_NOTE } from "../actions/user";

const initialState = {
  users: [
    {
      username: "luke.skywalker@resistence.com",
      password: "password123",
    },
    {
      username: "darth.vader@empire.com",
      password: "iamyourfather",
    },
    {
      username: "yoda@jedicouncil.com",
      password: "challengeyoumusthmm?",
    },
  ],
  isAuthenticated: true,
  errorMsg: null,
  notes: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(CHECK_USER, (state: any, action: any) => {
      const { username, password } = action.payload;
      const usercheck = state.users.find(
        (user: any) => user.username === username && user.password === password
      );
      if (usercheck) {
        state.isAuthenticated = true;
        state.errorMsg = null;
      } else {
        state.errorMsg = "Invalid username/password";
      }
    })
    .addCase(ADD_NOTE, (state: any, action: any) => {
      state.notes.push(action.payload);
    })
    .addCase(DELETE_NOTE, (state: any, action: any) => {
      state.notes = state.notes.filter(
        (note: any) => note.id !== action.payload
      );
    });
});
