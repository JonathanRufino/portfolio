import React from 'react';
import { render } from '@testing-library/react';

import Experience from '~/components/Experience';

describe('Experience component', () => {
  it('should have a title', () => {
    const { getByText } = render(<Experience />);

    expect(getByText('My Experience')).toBeTruthy();
  });

  it('should have a description', () => {
    const { getByText } = render(<Experience />);

    expect(
      getByText(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      )
    ).toBeTruthy();
  });
});
