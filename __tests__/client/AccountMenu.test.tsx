import React from 'react';
import { render } from '@testing-library/react';
import AccountMenu from '../../src/client/components/AccountMenu';

describe('AccountMenu', () => {
  test('renders without errors', () => {
    render(<AccountMenu />);
  });

  // test('renders a heading with the correct text', () => {
  //   const { getByText } = render(<App />);
  //   const headingElement = getByText('Hello world!');
  //   expect(headingElement).toBeTruthy();
  // });

});