import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from './App';
import Setup from './Setup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders one ul tag', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('ul').length).toBe(1);
});

it('renders three li tags at the beggining', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('li').length).toBe(3);
});

it('rendered the li with correct text at the beggining', () => {
  const wrapper = shallow(<App />);
  const tasks = ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
  expect(wrapper.find('li').length).toBe(3);
  wrapper.find('li').forEach(function(node, i) {
    expect(node.text()).toBe(tasks[i]);
  });
});

