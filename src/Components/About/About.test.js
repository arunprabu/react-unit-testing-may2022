// TEST PATTERN: AAA
import About, { add } from './About';

describe('About Component', () => { 

  it('should be available with in app', () => {
    expect(About).toBeDefined();
  });

  it('should add two numbers properly', () => {
    // Sometimes multiple assertions are needed
    expect(add(10, 20)).toEqual(30);
    expect(add(5, 2)).toEqual(7);
  });

  // testing whether add receives numbers as inputs
  it('handles invalid inputs', () => {
    expect(add("ABC", "^^^^")).toEqual('Wrong Input');
  });

  it('should add properly and return number as datatype', () => {
    // checking the return type
    expect(add(10, 20)).not.toBeNaN();
  })

});