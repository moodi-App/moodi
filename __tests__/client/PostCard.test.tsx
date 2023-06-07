import React from 'react';
import { render, screen } from '@testing-library/react';
import PostCard from '../../src/client/components/PostCard';
import '@testing-library/jest-dom';

describe('PostCard', () => {
  const props = {
    username: 'Eric',
    user_img: 'https://trello.com/1/cards/647eaaf3e02c15a37fa00a77/attachments/647f67fe58420da644e7c43b/download/Mooder-sq.png',
    emoji: 0,
    scale: 5,
    text: 'Feeling great',
    timestamp: '10am',
    reaction: 2
  }
  test('renders without errors', () => {
    render(<PostCard {...props} />);
  });


  test('renders username and image', () => {
    render(<PostCard {...props} />);
    expect(screen.getByText('Eric')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});