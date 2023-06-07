import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FollowList from '../../src/client/components/FollowList';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('FollowList', () => {
  test('renders without errors', () => {
    render(<FollowList />);
  });

  test('Should contain an input field and a button', () => {
    render(<FollowList />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: 'ADD' });
  
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should contain correct title', () => {
    render(<FollowList />);
    expect(screen.getByText('Follow List')).toBeInTheDocument();
  })

});

