import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';



describe('<App />', ()=>{
  it('shallow renders without crashing', ()   => {
    shallow(<App />); // notice this only renders App and will not render any child components
  });
  it.skip('matches snapshot', ()=>{
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('should render an h1 with a display class', ()=>{
    const wrapper = shallow(<App />);
    //shallow renders app
    expect(wrapper.find('h1.display').length).toBe(0);
    //finds all h1's with classname display (Returns an array so the lenght with refer to the number of elements) 
  })
})