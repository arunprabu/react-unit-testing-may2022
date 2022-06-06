import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// arranging the mock -- setup
jest.mock('./Hello', () => {
  // returning faked comp
  return () => <div data-testid="helloComp">Hello from Mocked Comp</div>
});

// arranging the mock -- setup
jest.mock('./HolaAmigo', () => {
  // returning faked comp
  return () => <div data-testid="holaComp">Hola Amigo from Mocked Comp</div>
});

it('mocking comp Hello and HolaAmigo', () => {

  //act 
  render(<Greet />);
  // assert 
  const helloCompDiv = screen.getByTestId("helloComp");
  expect(helloCompDiv).toBeInTheDocument();

  const holaCompDiv = screen.getByTestId("holaComp");
  expect(holaCompDiv).toBeInTheDocument();

})