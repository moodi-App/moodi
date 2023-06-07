import React from 'react';
import { render } from '@testing-library/react';
import LoginPage from '../../src/client/components/LoginPage';

describe('LoginPage', () => {
  test('renders without errors', () => {
    render(<LoginPage />);
  });



});