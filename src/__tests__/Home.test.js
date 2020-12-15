import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import { screen, fireEvent } from '@testing-library/react';

beforeEach(() => { renderWithRouter(<App />); });

it('should render Home page', () => {
  const homeTitle = screen.getByText(/home/i);

  expect(homeTitle).toBeInTheDocument();
})

it('should render A link to login page', () => {
  const loginLink = screen.getByText(/login/i);

  expect(loginLink).toBeInTheDocument();
})
