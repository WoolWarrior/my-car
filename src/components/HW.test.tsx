import { render, screen } from '@testing-library/react';
import HelloWorld from './HW';

test('renders Hello, World!', () => {
  render(<HelloWorld />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
