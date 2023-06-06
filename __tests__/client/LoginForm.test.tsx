import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../src/client/components/LoginForm';
import '@testing-library/jest-dom';

// mock useNavigate to create spy function
const navigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => navigate,
}));

beforeEach(() => {
  render(<LoginForm/>)
});

describe('LoginForm', () => {
  test('renders without errors', () => {
    expect(screen.getByRole('button')).toHaveTextContent('Login');
  });

  test("submits the form with username and password", () => {
    // grab username and password inputs by placeholder text
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    // input test values by simulating onChange event
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // submit the form
    const submitButton = screen.getByText("Login");
    fireEvent.click(submitButton);

    // form submission should take user to main page
    expect(navigate).toHaveBeenCalledWith("/");
  });
});