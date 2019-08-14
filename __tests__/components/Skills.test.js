import React from 'react';
import { render } from '@testing-library/react';

import Skills from '~/components/Skills';

describe('Skills component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Skills />);

    expect(getByText('My Skills')).toBeTruthy();
  });

  it('should have a description', () => {
    const { getByText } = render(<Skills />);

    expect(
      getByText(
        "I'm specialized in mobile development, but I'm currently improving myself learning frontend and backend development with Node.js and ReactJS respectively"
      )
    ).toBeTruthy();
  });

  it('should have a list of skills', () => {
    const { getByTestId, getByText } = render(<Skills />);

    expect(getByTestId('skills-list')).toContainElement(getByText('Web'));
    expect(getByTestId('skills-list')).toContainElement(getByText('Mobile'));
    expect(getByTestId('skills-list')).toContainElement(getByText('Backend'));
  });
});
