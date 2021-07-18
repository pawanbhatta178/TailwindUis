import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';


describe('Button', () => {

  it('should call the onClick method when a user clicks on the button', () => {
    // mock out our OnClick function
    const mockClick = jest.fn();

    const { getByRole } = render(<Dropdown />);


    // we store a variable with the button element
    mockClick()
    // Simulate a user clicking on the button

    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});



