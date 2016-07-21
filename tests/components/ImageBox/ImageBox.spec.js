import React from 'react'
import { bindActionCreators } from 'redux'
import { ImageBox } from 'components/ImageBox'
import { shallow } from 'enzyme'

describe('(Component) ImageBox', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<ImageBox {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})