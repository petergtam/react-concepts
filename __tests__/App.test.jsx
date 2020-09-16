import React from 'react';
import { shallow } from 'enzyme';
import App from 'js/App';

describe('Render App test', () => {
  it('Should render Provider', () => {
    const app = shallow(<App />);
    expect(app.find('div')).toBeTruthy();
  });
});
