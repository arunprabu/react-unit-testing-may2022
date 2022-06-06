import { render, screen } from "@testing-library/react";
import Todos from "./Todos";

// Testing REST API Call
it('fetches todos via api call', async() => {
  render(<Todos />);
  expect(await screen.findByText('delectus aut autem')).toBeInTheDocument();
});

// Challenges/Disadv of API testing 
/* 
  1. Time consuming 
  2. Availability of REST API (may be down, may be still in dev)
  3. No guarantee for the sample data like this 'delectus aut autem'. 
*/

