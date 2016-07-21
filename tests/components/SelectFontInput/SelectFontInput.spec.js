import React from 'react'
import { bindActionCreators } from 'redux'
import { SelectFontInput } from 'components/SelectFontInput'
import { shallow } from 'enzyme'

describe('(Component) SelectFontInput', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<SelectFontInput {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})