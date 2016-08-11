import React from 'react'
import { bindActionCreators } from 'redux'
import { PriceField } from 'components/PriceField'
import { shallow } from 'enzyme'

describe('(Component) PriceField', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(PriceField {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})