import React from 'react';
import { render } from '@testing-library/react';
import PostForm from '../../src/client/components/PostForm';

describe('PostForm', () => {
  test('renders without errors', () => {
    render(<PostForm />);
  });
  test('has button text', () => {
    const { getByText } = render(<PostForm />);
    const buttonElement = getByText('Post your feelings');
    expect(buttonElement).toBeTruthy();
  });
});