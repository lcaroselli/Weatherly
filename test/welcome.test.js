import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomePage from '../lib/WelcomePage';
import LocalStorage from '../test_helpers/mockLocalStorage';


describe('WelcomePage', () => {
  window.localStorage = new LocalStorage();

  const clickSubmitFn = jest.fn();
  const setCityFn = jest.fn();
  const clickCityFn = jest.fn();

  const wrapper = shallow(<WelcomePage
    clickedSubmit = { clickSubmitFn }
    setCity = { setCityFn }
    suggestions = { [] }
    clickCity = { clickCityFn }
    inputValue = { 'city' }/>)

  // beforeEach(() => {
  //   const clickSubmitFn = jest.fn();
  //   const setCityFn = jest.fn();
  //   const clickCityFn = jest.fn();
  //
  //   const wrapper = shallow(<WelcomePage
  //     clickedSubmit = { clickSubmitFn }
  //     setCity = { setCityFn }
  //     suggestions = { [] }
  //     clickCity = { clickCityFn }
  //     inputValue = { 'city' }/>)
  // })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a submit button', () => {
    const button = wrapper.find('.submit-btn')
    expect(button).toBeDefined()
  })

  it('should be clickable and run the clickSubmitFn', () => {
    const button = wrapper.find('.submit-btn')
    button.simulate('click')

    expect(clickSubmitFn).toHaveBeenCalledTimes(1);
  })

  it('should have an input field', () => {
    const inputField = wrapper.find('.text-field')
    expect(inputField).toBeDefined()
  })


})