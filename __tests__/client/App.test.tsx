import React from 'react';
import { render } from '@testing-library/react';
import App from '../../src/client/components/App';
import { BrowserRouter } from "react-router-dom";

// https://testing-library.com/docs/example-react-router/
describe('App', () => {
  test('renders without errors', () => {
    render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
  });

  // test('renders a heading with the correct text', () => {
  //   const { getByText } = render(<App />);
  //   const headingElement = getByText('Hello world!');
  //   expect(headingElement).toBeTruthy();
  // });

});