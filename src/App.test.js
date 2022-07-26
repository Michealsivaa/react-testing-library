import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

test('button has correct initial color', () => {
  render(<App />);
  //find a element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to MidnightBlue'});

  //expect the background color red
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})

  //click button
  fireEvent.click(colorButton)
  

  //expect the background color to blue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to MediumVioletRed')
});

test('initial conditions', () => {
  render(<App />);

  //check the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to MidnightBlue'});
  expect(colorButton).toBeEnabled(); 

  //check that the checkbox starts out unChecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables second click ', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', {name: 'Disabled button'});
  const colorButton = screen.getByRole('button', {name: 'Change to MidnightBlue'});



  //click button
  fireEvent.click(colorButton)

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: grey')

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  });
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
})