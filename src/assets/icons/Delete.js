import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Close = styled.svg`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
`

function Delete({ onClick }) {
  return (
    <Close xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 50 50" onClick={onClick}>
      <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 L 7.71875 6.28125 z" fill="#FFF" />
    </Close>
  )
}

Delete.propTypes = {
  onClick: PropTypes.func
}

export default Delete
