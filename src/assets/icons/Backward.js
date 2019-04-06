import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../../utils/media'

const Icon = styled.svg`
  cursor: pointer;
  margin: 0 1rem;
  fill: white;
  padding: 0.5rem;
  transition: fill 0.3s, background 0.3s;
  border-radius: 3px;
  min-width: 20px;
  min-height: 20px;
  ${media.mdUp`
    opacity: 0.4;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  `}
  ${media.smDown`
    order: 1;
  `}
`

function Backward({ onClick }) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" onClick={onClick}>
      <path d="M 35 2.75 L 12.75 25 L 35 47.25 L 37.09375 45.15625 L 16.9375 25 L 37.09375 4.84375 L 35 2.75 z" />
    </Icon>
  )
}

Backward.propTypes = {
  onClick: PropTypes.func
}

export default Backward
