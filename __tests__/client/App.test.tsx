import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders without errors', () => {
    render(<App />);
  });

  test('renders a heading with the correct text', () => {
    const { getByText } = render(<App />);
    const headingElement = getByText('Hello world!');
    expect(headingElement).toBeInTheDocument();
  });

});