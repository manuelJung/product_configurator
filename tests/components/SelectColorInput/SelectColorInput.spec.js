import React from 'react'
import { bindActionCreators } from 'redux'
import { SelectColorInput } from 'components/SelectColorInput'
import { shallow } from 'enzyme'

describe('(Component) SelectColorInput', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<SelectColorInput {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})