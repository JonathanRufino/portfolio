import React from 'react';
import { render } from '@testing-library/react';

import Hero from '~/components/Hero';

describe('Hero component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Hero />);

    expect(getByText('Jonathan Rufino')).toBeTruthy();
  });

  it('should have a contact button', () => {
    const { getByText } = render(<Hero />);

    expect(getByText('Contact Me')).toBeTruthy();
  });

  it('should have an image', () => {
    const { getByTestId } = render(<Hero />);

    expect(getByTestId('hero-image')).toBeTruthy();
  });
});
