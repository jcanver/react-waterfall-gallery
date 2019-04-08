import expect from 'expect' // eslint-disable-line
// import React from 'react'
// import {render, unmountComponentAtNode} from 'react-dom'

import { getStarts, getFinishes, getDefaultStyles, getTransitionStyles } from '../Fade'

describe('Fade', () => {
  describe('getStarts()', () => {
    let expected
    beforeEach(() => {
      expected = {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
      }
    })

    it('should return correct starts for boolean params', () => {
      expected.top = '-40px'
      expect(getStarts(true)).toEqual(expected)

      expected.top = 'auto'
      expected.bottom = '-40px'
      expect(getStarts(null, true)).toEqual(expected)

      expected.bottom = 'auto'
      expected.left = '-40px'
      expect(getStarts(null, null, true)).toEqual(expected)

      expected.left = 'auto'
      expected.right = '-40px'
      expect(getStarts(null, null, null, true)).toEqual(expected)
    })

    it('should return correct starts for object params', () => {
      expected.top = '-80px'
      expect(getStarts({ start: '-80px' })).toEqual(expected)

      expected.top = 'auto'
      expected.bottom = '-80px'
      expect(getStarts(null, { start: '-80px' })).toEqual(expected)

      expected.bottom = 'auto'
      expected.left = '-80px'
      expect(getStarts(null, null, { start: '-80px' })).toEqual(expected)

      expected.left = 'auto'
      expected.right = '-80px'
      expect(getStarts(null, null, null, { start: '-80px' })).toEqual(expected)
    })
  })

  describe('getFinishes()', () => {
    let expected
    beforeEach(() => {
      expected = {
        top: 'auto',
        bottom: 'auto',
        left: 'auto',
        right: 'auto',
      }
    })

    it('should return correct finishes for boolean params', () => {
      expected.top = '0'
      expect(getFinishes(true)).toEqual(expected)

      expected.top = 'auto'
      expected.bottom = '0'
      expect(getFinishes(null, true)).toEqual(expected)

      expected.bottom = 'auto'
      expected.left = '0'
      expect(getFinishes(null, null, true)).toEqual(expected)

      expected.left = 'auto'
      expected.right = '0'
      expect(getFinishes(null, null, null, true)).toEqual(expected)
    })

    it('should return correct finishes for object params', () => {
      expected.top = '-80px'
      expect(getFinishes({ finish: '-80px' })).toEqual(expected)

      expected.top = 'auto'
      expected.bottom = '-80px'
      expect(getFinishes(null, { finish: '-80px' })).toEqual(expected)

      expected.bottom = 'auto'
      expected.left = '-80px'
      expect(getFinishes(null, null, { finish: '-80px' })).toEqual(expected)

      expected.left = 'auto'
      expected.right = '-80px'
      expect(getFinishes(null, null, null, { finish: '-80px' })).toEqual(expected)
    })
  })

  describe('getDefaultStyles()', () => {
    const speed = 400
    const expected = {
      transition: `opacity ${speed}ms, left ${speed}ms, right ${speed}ms, top ${speed}ms, bottom ${speed}ms`,
      opacity: 0,
      position: 'relative',
    }

    it('should return default styles with correct speed transitions', () => {
      expect(getDefaultStyles(speed)).toEqual(expected)
    })

    it('should return default styles and extra styles', () => {
      const extraStyles = {
        backgroundColor: 'red',
        fontSize: '20px',
      }
      expected.backgroundColor = extraStyles.backgroundColor
      expected.fontSize = extraStyles.fontSize

      expect(getDefaultStyles(speed, extraStyles)).toEqual(expected)
    })
  })

  describe('getTransitionStyles()', () => {
    let expected
    beforeEach(() => {
      expected = {
        entering: { opacity: 0, pointerEvents: 'none', top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' },
        entered: { opacity: 1, pointerEvents: 'auto', top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' },
        exiting: { opacity: 1, pointerEvents: 'auto', top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' },
        exited: { opacity: 0, pointerEvents: 'none', top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' },
      }
    })

    it('should return top boolean styles', () => {
      expected.entering.top = '-40px'
      expected.exited.top = '-40px'
      expected.entered.top = '0'
      expected.exiting.top = '0'
      expect(getTransitionStyles(true)).toEqual(expected)
    })

    it('should return bottom boolean styles', () => {
      expected.entering.bottom = '-40px'
      expected.exited.bottom = '-40px'
      expected.entered.bottom = '0'
      expected.exiting.bottom = '0'
      expect(getTransitionStyles(null, true)).toEqual(expected)
    })

    it('should return left boolean styles', () => {
      expected.entering.left = '-40px'
      expected.exited.left = '-40px'
      expected.entered.left = '0'
      expected.exiting.left = '0'
      expect(getTransitionStyles(null, null, true)).toEqual(expected)
    })

    it('should return right boolean styles', () => {
      expected.entering.right = '-40px'
      expected.exited.right = '-40px'
      expected.entered.right = '0'
      expected.exiting.right = '0'
      expect(getTransitionStyles(null, null, null, true)).toEqual(expected)
    })

    it('should return top object styles', () => {
      expected.entering.top = '-100px'
      expected.exited.top = '-100px'
      expected.entered.top = '-50px'
      expected.exiting.top = '-50px'
      expect(getTransitionStyles({ start: '-100px', finish: '-50px' })).toEqual(expected)
    })

    it('should return bottom object styles', () => {
      expected.entering.bottom = '-100px'
      expected.exited.bottom = '-100px'
      expected.entered.bottom = '-50px'
      expected.exiting.bottom = '-50px'
      expect(getTransitionStyles(null, { start: '-100px', finish: '-50px' })).toEqual(expected)
    })

    it('should return left object styles', () => {
      expected.entering.left = '-100px'
      expected.exited.left = '-100px'
      expected.entered.left = '-50px'
      expected.exiting.left = '-50px'
      expect(getTransitionStyles(null, null, { start: '-100px', finish: '-50px' })).toEqual(expected)
    })

    it('should return right object styles', () => {
      expected.entering.right = '-100px'
      expected.exited.right = '-100px'
      expected.entered.right = '-50px'
      expected.exiting.right = '-50px'
      expect(getTransitionStyles(null, null, null, { start: '-100px', finish: '-50px' })).toEqual(expected)
    })
  })
})
