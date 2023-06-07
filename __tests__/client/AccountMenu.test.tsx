import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountMenu from '../../src/client/components/AccountMenu';
import '@testing-library/jest-dom';

// mock useNavigate to create spy function
const navigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => navigate,
}));

beforeEach(() => {
  render(<AccountMenu />);
});

describe('AccountMenu', () => {
  test('contains avatar and logout button', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Logout');
  });

  test('logout button redirects to login page', () => {
    const logoutButton = screen.getByRole('button');
    fireEvent.click(logoutButton);
    expect(navigate).toHaveBeenCalledWith("/login");
  });

});