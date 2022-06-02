import Company from './Company';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Company Component', () => { 

  // Test spec #1 
  it('should be available with in app', () => {
    expect(Company).toBeDefined();
  });

  // Test Spec #2 - Let's test the props
  it('receives props and displays them properly', () => {
    // take the comp to put under test with props
    render(<Company name='Cognizant Technologies Pvt Ltd'/>);
    // fetching the element by an attribute data-testid from JSX - Refer Company.js 
    // checking if the props are received correctly
    expect(screen.getByTestId('companyNameEl')).toHaveTextContent('Cognizant Technologies Pvt Ltd');
  });

  // Test Spec #3 
  it('has Welcome to My Company\'s Official Website!', ()=>{
    render(<Company />);
    const officialTxtEl = screen.getByText('Welcome to My Company\'s Official Website!');
    expect(officialTxtEl).toBeInTheDocument();
  });

  // Test spec #4
  it('has css style with color green', () => {
    render(<Company />);
    expect(screen.getByTestId('employeesCountEl')).toHaveStyle('color: green');
  });   

  // Test Spec #5
  // TODO: test whether the el has css class btn.
  // Do not use getByTestId. instead use getByRole
  // Have the button with label JOIN NOW 
  it('has a button with css class btn', () => {
    // have the assertion 
  });

  // Test Spec #6
  it(`has an element with placeholder 'Enter Country'`, () => {
    render(<Company />);
    const countryInput = screen.getByPlaceholderText('Enter Country');
    expect(countryInput).toBeTruthy();
  });

  // Test #7 - checking if the input element works with onChange event 
  it('should update country on onChange event', () => {
    render(<Company />);
    // find an element with placeholder Enter Country
    const countryInput = screen.getByPlaceholderText('Enter Country');
    // now checking if onChange is working or not
    // mock fire change event with the mock value 
    fireEvent.change(countryInput, { target: { value: 'Canada'} });
    // finally checking if the input element is showing the right country
    expect(countryInput.value).toBe('Canada');
  });

});