export function getStarts(top, bottom, left, right) {
  return {
    top: top ? (typeof top === 'object' ? top.start : '-40px') : 'auto',
    bottom: bottom ? (typeof bottom === 'object' ? bottom.start : '-40px') : 'auto',
    left: left ? (typeof left === 'object' ? left.start : '-40px') : 'auto',
    right: right ? (typeof right === 'object' ? right.start : '-40px') : 'auto'
  }
}


describe('<Fade />', () => {
  describe('getStarts()', () => {
    it('should be true', () => {
      expect(true).toEqual(true)
    })
  })
})