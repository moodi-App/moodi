import React from 'react';
import { render } from '@testing-library/react';
import PostCard from '../../src/client/components/PostCard';

describe('PostCard', () => {
  test('renders without errors', () => {
    render(<PostCard />);
  });
});