import React from 'react';
//import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Calculadora from './calculadora';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


describe ('Calculadora', () => {

it('deve renderizar o componente sem erros', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<Calculadora />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('deve limpar o campo de numeros', ()=>{
 const{getByTestId, getByText} = render(<Calculadora />);
 fireEvent.click(getByText('2'));
 fireEvent.click(getByText('C'));
 expect(getByTestId('txtNumeros')).toHaveValue('0');

});

it('deve somar 2+3 =5', ()=>{
  const {getByTestId, getByText} = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('5');

});

it('deve subtrair 5-3=2', ()=>{
  const {getByTestId, getByText} = render(<Calculadora />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');
});

it('deve dividir 6/3=2', ()=>{
  const {getByTestId, getByText} = render(<Calculadora />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('2');
});

it('deve multiplicar 2*3=6', ()=>{
  const {getByTestId, getByText} = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('6');
});

it('deve soma 2.5+3.6=6.1', ()=>{
  const {getByTestId, getByText} = render(<Calculadora />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumeros')).toHaveValue('6.1');
});

});
