import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitcher from "./ThemeSwitcher";

it('has toggling theme button', () => {
  render(<ThemeSwitcher />);
  const btnEl = screen.getByText(/Switch Theme/i);
  const paraEl = screen.getByText(/Current Theme/i);
  userEvent.click(btnEl);
  expect(paraEl).toHaveTextContent(/dark/i);
});