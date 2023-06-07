import React from 'react';
import { render } from '@testing-library/react';
import FollowList from '../../src/client/components/FollowList';

describe('FollowList', () => {
  test('renders without errors', () => {
    render(<FollowList />);
  });

});