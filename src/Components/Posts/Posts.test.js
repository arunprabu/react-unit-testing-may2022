import {
  render,
  screen
} from "@testing-library/react";

import Posts from "./Posts";
import mockFetch from "./mockFetch";

describe('PostsComponent', () => {

  beforeEach(() => {
    // By default, jest.spyOn also calls the spied method
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders the posts page", async () => {
    render(<Posts />);

    expect(screen.getByTestId("h2El")).toHaveTextContent(/Posts/);
    expect(screen.getByRole("combobox")).toHaveDisplayValue("Select");

    // divs with role listitem will be generated after ajax call success. 
    // so lets await
    const postItems =  await screen.findAllByRole("listitem");
    expect(postItems).toHaveLength(2);

  });

})