import React from 'react'
import { bindActionCreators } from 'redux'
import { SelectInput } from 'components/SelectInput'
import { shallow } from 'enzyme'

describe('(Component) SelectInput', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<SelectInput {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})