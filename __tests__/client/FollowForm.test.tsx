import React from 'react';
import { render } from '@testing-library/react';
import FollowForm from '../../src/client/components/FollowForm';

describe('FollowForm', () => {
  test('renders without errors', () => {
    render(<FollowForm />);
  });


});