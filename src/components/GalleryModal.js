import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Forward from '../assets/icons/Forward'
import Backward from '../assets/icons/Backward'
import Delete from '../assets/icons/Delete'
import media from '../utils/media'

export default class GalleryModal extends React.PureComponent {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    image: PropTypes.string,
    handleNext: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
  }

  static defaultProps = {
    image: null,
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  handleKeyDown = ({ code }) => {
    const { handleNext, handlePrev } = this.props

    if (code === 'ArrowRight') {
      handleNext()
    } else if (code === 'ArrowLeft') {
      handlePrev()
    }
  }

  render() {
    const {
      show,
      image,
      handleNext,
      handlePrev,
      closeModal,
    } = this.props
    return (
      <Modal show={show}>
        <Backward
          onClick={handlePrev}
        />
        <Frame
          src={image}
        />
        <Forward
          onClick={handleNext}
        />
        <Delete
          onClick={closeModal}
        />
      </Modal>
    )
  }
}

const Modal = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1001;
  opacity: ${({ show }) => show ? '1' : '0'};
  pointer-events: ${({ show }) => show ? 'auto' : 'none'};
  transition: opacity 0.8s;
  ${media.smDown`
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  `}
`
const Frame = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  object-position: center center;
  ${media.smDown`
    width: 90%;
    max-height: 70vh;
    height: auto;
    margin-bottom: 20px;
  `}
`
