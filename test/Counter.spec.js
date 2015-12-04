import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
const Simulate = ReactTestUtils.Simulate
import { Provider } from 'react-redux'
import { newStore } from '../src/Store'

import Component from '../src/Counter/Component.jsx'
import { increment, add } from '../src/Counter/Actions'

describe('Counter', () => {

  describe('action', () => {
    describe('increment', () => {
      it('should increment 2 numbers', () => {
        const store = newStore()
        expect(store.getState()).to.equal(0, 'initial')
        store.dispatch(increment())
        expect(store.getState()).to.equal(1, 'increment')
        store.dispatch(increment())
        expect(store.getState()).to.equal(2, 'increment')
      })
    })
    describe('add', () => {
      it('should add two numbers', () => {
        const store = newStore()
        expect(store.getState()).to.equal(0, 'initial')
        store.dispatch(add(42))
        expect(store.getState()).to.equal(42, 'add 42')
        store.dispatch(add(2))
        expect(store.getState()).to.equal(44, 'add 2')
      })
    })
  })

  describe('component', () => {
    var component, store, buttons;
    before(() => {
      store = newStore()
      const tree = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <Component/>
      </Provider>)
      component = ReactTestUtils.scryRenderedComponentsWithType(tree, Component)[0]
    })
    it('should have two buttons', () => {
      buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button')
      expect(buttons).to.have.length(2, 'Expected to have two buttons')
    })
    it('should render increment and add', () => {
      const buttonIncrement = buttons[0]
      const buttonAdd = buttons[1]
      expect(component.stateProps.count).to.equal(0, 'initial: zero')
      Simulate.click(buttonIncrement)
      expect(component.stateProps.count).to.equal(1, 'increment')
      Simulate.click(buttonAdd)
      expect(component.stateProps.count).to.equal(43, 'add')
      const counts = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'count')
      expect(counts).to.have.length(1, 'count')
      const count = counts[0]
      expect(count.textContent).to.equal('Count: 43', 'html content')
    })
  })
})
