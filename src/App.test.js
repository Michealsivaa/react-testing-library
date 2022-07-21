import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  //find a element with a role of button and text of 'change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  //expect the background color red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click button
  fireEvent.click(colorButton)
  

  //expect the background color to blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  //expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />);

  //check the button starts out enabled
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled(); 

  //check that the checkbox starts out unChecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables second click ', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', {name: 'Disabled button'});
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  //click button
  fireEvent.click(colorButton)

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: grey')

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
})