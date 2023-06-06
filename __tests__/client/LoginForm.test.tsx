import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from '../../src/client/components/LoginForm';

describe('LoginForm', () => {
  test('renders without errors', () => {
    render(<LoginForm />);
  });
});