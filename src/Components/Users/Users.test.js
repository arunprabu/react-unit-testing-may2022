import { render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import { fetchAPI } from '../../Utils/fetchAPI';

jest.mock('../../Utils/fetchAPI');

// Testing REST API Call using Mocks
it('renders comp properly with api data (mocks)', async() => {

  // here's my mock data
  // as the network call will get data after sometime, it should have async await
  // instead we can mock. testing upon api request 
  // mocking successful api call. 
  // [TODO]: TRY Mocking error case also. 
  fetchAPI.mockResolvedValue([
    {
      id: 1,
      name: "Leanne Graham",
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      name: "John Williams",
      phone: "34532432",
    }
  ])

  render(<Users />);
  await waitFor( () => {
    screen.getByText('Leanne Graham')
  });
});


