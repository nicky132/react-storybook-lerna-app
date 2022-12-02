import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

test('button render correct', async () => {
  render(<Button text="OK" onClick={() => {}} />);
  expect(screen.getByText('OK')).toBeInTheDocument();
});
