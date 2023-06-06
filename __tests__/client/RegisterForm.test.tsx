import React from 'react';
import { render } from '@testing-library/react';
import RegisterForm from '../../src/client/components/RegisterForm';

describe('RegisterForm', () => {
  test('renders without errors', () => {
    render(<RegisterForm />);
  });
});