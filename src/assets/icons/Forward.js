import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../../utils/media'

const Icon = styled.svg`
  cursor: pointer;
  margin: 0 1rem;
  fill: white;
  padding: 0.5rem;
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

function Forward({ onClick }) {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" onClick={onClick}>
      <path d="M 15 2.75 L 12.90625 4.84375 L 33.0625 25 L 12.90625 45.15625 L 15 47.25 L 37.25 25 L 15 2.75 z" />
    </Icon>
  )
}

Forward.propTypes = {
  onClick: PropTypes.func
}

export default Forward
