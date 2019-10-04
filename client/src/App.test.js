import React from 'react';
import ReactDOM from 'react-dom';
import "@testing-library/jest-dom/extend-expect";
import * as rtl from '@testing-library/react';
import App from './App';

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { name: 'Sandra', country: 'Nigeria', searches: 2, id: '1'},
        ],
      });
    },
  };
});

let tools;
beforeEach(() => {
 rtl.cleanup();
 tools = rtl.render(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('App Component', () => {
  it('shows the name of player', () => {
    const elementWithNameOfPlayer = tools.queryByText(/name/i);
    expect(elementWithNameOfPlayer).toBeInTheDocument();
  });

  it('can render a player that comes from api', () => {
    const elementWithSweeping = tools.queryByText(/Nigeria/);
    expect(elementWithSweeping).toBeInTheDocument();
  });  
});
