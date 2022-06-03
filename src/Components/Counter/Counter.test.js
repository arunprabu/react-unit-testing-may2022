import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CounterComponent', () => {

  it('has value with initial state 0', () =>{
    render(<Counter />);
    const valueEl = screen.getByTestId('valueTxt');
    expect(valueEl.textContent).toBe('0');
  });

  it('has proper increment and decrement feature', () => {
    render(<Counter />);
    const valueEl = screen.getByTestId('valueTxt');

    // find increment and decrement btn elements
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');
    // before mock firing event, let's check whether initial value is 0 or not
    expect(valueEl.textContent).toBe('0');
    // let mock fire event onclick using fireevent 
    fireEvent.click(incrementBtn);
    // set the expectation 
    expect(valueEl.textContent).toBe('1');
    // triggering decrement btn click 
    fireEvent.click(decrementBtn);
    // set the expection after decrement
    expect(valueEl.textContent).toBe('0');
  });

 

});