import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { userReducer } from "../reducers/index";

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      user: {
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
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
