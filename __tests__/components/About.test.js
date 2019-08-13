import React from 'react';
import { render } from '@testing-library/react';

import About from '~/components/About';

describe('About component', () => {
  it('should have an image', () => {
    const { getByTestId } = render(<About />);

    expect(getByTestId('about-image')).toBeTruthy();
  });

  it('should have main description', () => {
    const { getByText } = render(<About />);

    expect(
      getByText("I'm a passionate mobile developer with 5 years of experience")
    ).toBeTruthy();
  });

  it('should have a secondary description', () => {
    const { getByText } = render(<About />);

    expect(
      getByText(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      )
    ).toBeTruthy();
  });

  it('should have a button to download CV', () => {
    const { getByText } = render(<About />);

    expect(getByText('Download CV')).toBeTruthy();
  });
});
