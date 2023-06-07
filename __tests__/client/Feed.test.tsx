import React from 'react';
import { render } from '@testing-library/react';
import Feed from '../../src/client/components/Feed';

describe('Feed', () => {
  test('renders without errors', () => {
    render(<Feed />);
  });

  test('renders a heading with the correct text', () => {
    const { getByText } = render(<Feed />);
    const headingElement = getByText('Feed');
    expect(headingElement).toBeTruthy();
  });

});