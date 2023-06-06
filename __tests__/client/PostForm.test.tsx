import React from 'react';
import { render } from '@testing-library/react';
import PostForm from '../../src/client/components/PostForm';

describe('PostForm', () => {
  test('renders without errors', () => {
    render(<PostForm />);
  });
});