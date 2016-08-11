import React from 'react'
import { bindActionCreators } from 'redux'
import { InputCheckbox } from 'components/InputCheckbox'
import { shallow } from 'enzyme'

describe('(Component) InputCheckbox', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(InputCheckbox {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})