import { fireEvent, render, screen } from "@testing-library/react";
import Movies from "./Movies";

describe('MoviesComponent', () => { 
  let movieInfo = {
    id: 12321,
    url: 'http://www.imdb.com',
    movieName: 'Jurassic Park'
  }

  it('should have Welcome to Movie Portal text', () => {
    render(<Movies />);
    const headingEl = screen.getByTestId('heading');
    expect(headingEl).toHaveTextContent('Welcome to Movie Portal');
  });

  it('receives url props', () => {
    render(<Movies {...movieInfo}/>);
    const linkEl = screen.getByTestId('link');
    expect(linkEl).toHaveTextContent('http://www.imdb.com');
  });

  it('will call handleSubscribe', () => {
    render(<Movies />);
    const subscribeBtnEl = screen.getByTestId('subscribeBtn');
    fireEvent.click(subscribeBtnEl);
    expect(subscribeBtnEl.textContent).toBe('Unsubscribe');

    fireEvent.click(subscribeBtnEl);
    expect(subscribeBtnEl.textContent).toBe('Subscribe');
  });

});