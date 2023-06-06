import React from 'react';
import { render } from '@testing-library/react';
import FollowCard from '../../src/client/components/FollowCard';

describe('FollowCard', () => {
  test('renders without errors', () => {
    render(<FollowCard />);
  });

  // test('renders a heading with the correct text', () => {
  //   const { getByText } = render(<App />);
  //   const headingElement = getByText('Hello world!');
  //   expect(headingElement).toBeTruthy();
  // });

});