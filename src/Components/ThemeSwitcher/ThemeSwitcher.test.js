import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";

import { shallow } from 'enzyme';
// For Enzyme Adapter Setup - Refer setupTests.js file 
// and then restart your test by typing 'npm run test'

it('has toggling theme button', () => {
  render(<ThemeSwitcher />);
  const btnEl = screen.getByText(/Switch Theme/i);
  const paraEl = screen.getByText(/Current Theme/i);
  userEvent.click(btnEl);
  expect(paraEl).toHaveTextContent(/dark/i);
});

it('should have para tag', () =>{
  //shallow will test the parent component. not child components. this is from enzyme
  const wrapper = shallow(<ThemeSwitcher />)

  //now let's use jest's validation library, expect
  expect(wrapper.find('p')).toBeTruthy();

});

it('div tag should have h2 as inner element', () => {
  const wrapper = shallow(<ThemeSwitcher />);
  expect(wrapper.find('h2')).toHaveLength(1);  //inner element length
});

it('h2 should have ThemeSwitcher text', () => {
  const wrapper = shallow(<ThemeSwitcher />);
  // The following line children is not an error. you can disable eslint
  expect(wrapper.find('h2')
    .children()
    .contains('ThemeSwitcher | User Generated Event and Enzyme'))
    .toEqual(true);

});