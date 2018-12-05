import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';



describe('<App />', ()=>{
  it('shallow renders without crashing', ()   => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });
  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
  it('matches snapshot', ()=>{
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
})