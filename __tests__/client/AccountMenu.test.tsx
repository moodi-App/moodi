import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccountMenu from '../../src/client/components/AccountMenu';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(<AccountMenu />);
});
describe('AccountMenu', () => {
  test('contains avatar and logout button', () => {
    expect(screen.getByAltText('avatar')).toBeInDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Logout');
  });

});