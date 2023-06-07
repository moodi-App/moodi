import React from 'react';
import { render } from '@testing-library/react';
import MainPage from '../../src/client/components/MainPage';

describe('MainPage', () => {
  test('renders without errors', () => {
    render(<MainPage />);
  });
});