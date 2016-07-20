import React from 'react'
import { bindActionCreators } from 'redux'
import { TextInput } from 'components/TextInput/TextInput'
import { shallow } from 'enzyme'

describe('(Component) TextInput', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<TextInput {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})