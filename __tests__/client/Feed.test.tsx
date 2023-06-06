import React from 'react';
import { render } from '@testing-library/react';
import Feed from '../../src/client/components/Feed';

describe('Feed', () => {
  test('renders without errors', () => {
    render(<Feed />);
  });

  // test('renders a heading with the correct text', () => {
  //   const { getByText } = render(<App />);
  //   const headingElement = getByText('Hello world!');
  //   expect(headingElement).toBeTruthy();
  // });

});