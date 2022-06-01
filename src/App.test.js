// unit testing 
// To test App component 
// TEST PATTERN: AAA (Arrange, Act, Assert)
// Arranging 
import { render, screen } from '@testing-library/react';
import App from './App';  // Taking up the comp testing 

// group of related test spec/cases -- Test Suite
describe( 'App Component', () => {

  // test spec / test case 
  test('should have Welcome text', () => {
    // ACT 
    render(<App />); // let's render the app comp 
    // only after rendering we can query thru the dom element 
    const welcomeEl = screen.getByText(/Welcome to Unit Testing!!!/); // executed  by react-testin-library
    // ASSERT 
    // expect is from JEST | toBeInTheDocument is from @testing-library/jest-dom
    expect(welcomeEl).toBeInTheDocument(); 
  });

  // test spec
  it('should render app comp', () => { // 'it' - is an alias of test 
    expect(App).toBeTruthy();
  });

});
