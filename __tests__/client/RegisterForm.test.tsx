import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from '../../src/client/components/RegisterForm';
import '@testing-library/jest-dom';

// mock useNavigate to create spy function
const navigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => navigate,
}));

describe('RegisterForm', () => {
  test('renders without errors', () => {
    const registerForm = render(<RegisterForm/>);
    expect(registerForm.getByRole('button')).toHaveTextContent('Register');
  });

  test('submits the form with email, username, and password', () => {
    render(<RegisterForm />);

    // grab email, username, and password inputs by id
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    // input test values by simulating onChange event
    fireEvent.change(emailInput, { target: { value: "testemail@moodi.com" } });
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // submit the form
    const submitButton = screen.getByText("Register");
    fireEvent.click(submitButton);

    // form submission should take user to main page
    expect(navigate).toHaveBeenCalledWith("/");
  });
});