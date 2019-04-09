import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../utils/media'
import Flex from './Flex'
import Fade from './Fade'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${props => props.opacity};
  position: relative;
  transition: opacity 0.3s;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${media.mdDown`
    opacity: 1;
  `}
  @media(max-width: 400px) {
    display: block;
  }
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.3s;
  &:hover {
    transform: translate(-8%, -8%) scale(1.16);
  }
`
const AppearWrapper = styled(Flex)`
  flex-grow: 1;
  height: ${props => props.rowHeight};
`

const fadeStyles = {
  width: '100%',
  height: '100%',
}

const getDirection = (direction) => {
  if (direction === 'bottom') {
    return {
      bottom: true,
    }
  }
  if (direction === 'top') {
    return {
      top: true,
    }
  }
  if (direction === 'left') {
    return {
      left: true,
    }
  }
  if (direction === 'right') {
    return {
      right: true,
    }
  }
  return {}
}

export default function Thumbnail({
  image,
  index,
  rowHeight,
  defaultOpacity,
  handleClick,
  show,
  timeout,
  direction,
}) {
  return (
    <AppearWrapper index={index} rowHeight={rowHeight}>
      <Fade
        show={show}
        timeout={timeout}
        styles={fadeStyles}
        {...getDirection(direction)}
      >
        <Wrapper index={index} opacity={defaultOpacity}>
          <Img
            src={image}
            onClick={() => handleClick(index)}
          />
        </Wrapper>
      </Fade>
    </AppearWrapper>
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  rowHeight: PropTypes.string.isRequired,
  defaultOpacity: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  timeout: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
}
