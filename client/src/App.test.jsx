import { test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

vi.mock('./api/health.js', () => ({
  getHealth: () => Promise.resolve({ status: 'ok' }),
}));

test('renders the home page', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole('heading', { name: 'FYP dApp' })).toBeTruthy();
  expect(await screen.findByText('API status: ok')).toBeTruthy();
});
