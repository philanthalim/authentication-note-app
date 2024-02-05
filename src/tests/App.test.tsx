import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Dashboard from "../pages/dashboard";
import { renderWithProviders } from "../utils/test-utils";
import userEvent from '@testing-library/user-event'

test("Add Note text", () => {
  renderWithProviders(<Dashboard />);
  const linkElement = screen.getByText(/Add Note/i);
  expect(linkElement).toBeInTheDocument();
});

test("add note function trigerred", () => {
  const { store } = renderWithProviders(<Dashboard />);
  const addButton = screen.getByText("ADD NOTE");
  addButton.click();
  expect(store.getState().user.notes.length).toEqual(1);
});

