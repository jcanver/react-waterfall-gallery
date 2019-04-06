import { css } from '@emotion/core'

const sizes = {
  smUp: '(min-width: 544px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 992px)',
  xlUp: '(min-width: 1200px)',
  smDown: '(max-width: 543px)',
  mdDown: '(max-width: 767px)',
  lgDown: '(max-width: 991px)',
  xlDown: '(max-width: 1199px)',
  smOnly: '(min-width: 544px) and (max-width: 767px)',
  mdOnly: '(min-width: 768px) and (max-width: 991px)',
  lgOnly: '(min-width: 992px) and (max-width: 1119px)'
}


/*eslint-disable */
const media = Object.keys(sizes).reduce((total, label) => {

  total[label] = (...args) => css`
    @media ${sizes[label]} {
      ${css(...args)}
    }
  `
  return total;
}, {});
/* eslint-enable */
export default media
