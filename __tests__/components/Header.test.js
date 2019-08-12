import React from 'react';
import { render } from '@testing-library/react';

import Header from '~/components/Header';

describe('Header component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Jonathan Rufino')).toBeTruthy();
  });

  it('should have a list of options', () => {
    const { getByTestId, getByText } = render(<Header />);

    expect(getByTestId('header-options')).toContainElement(getByText('About'));
    expect(getByTestId('header-options')).toContainElement(getByText('Skills'));
    expect(getByTestId('header-options')).toContainElement(
      getByText('Experience')
    );
    expect(getByTestId('header-options')).toContainElement(
      getByText('Contact')
    );
  });
});
