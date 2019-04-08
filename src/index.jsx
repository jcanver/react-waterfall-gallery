import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import timeout from './utils/timeout'

import Fade from './components/Fade'
import Gallery from './components/Gallery'
import GalleryModal from './components/GalleryModal'
import LoadingSpinner from './components/LoadingSpinner'

const Wrapper = styled.div`
`

export default class WaterfallGallery extends Component {
  static defaultProps = {
    images: [],
    rowHeight: '150px',
    numColumns: 4,
    gutterSize: '15px',
    defaultOpacity: 0.65,
    icon: null,
  }

  static propTypes = {
    images: PropTypes.array,
    rowHeight: PropTypes.string,
    numColumns: PropTypes.number,
    gutterSize: PropTypes.string,
    defaultOpacity: PropTypes.number,
    icon: PropTypes.node,
  }

  constructor(props) {
    super(props)
    const { images } = this.props

    this.state = {
      assetsLoaded: false,
      showModal: false,
      activeImage: null,
      entranceDelays: images.map((p, index) => (index + 1) * 200),
    }
  }

  componentDidMount() {
    const { images } = this.props
    this.preload(images)
  }

  openModal = async activeImage => this.setState({ activeImage, showModal: true })

  handleNext = () => {
    const { activeImage } = this.state
    const { images } = this.props

    this.setState({ activeImage: activeImage === images.length - 1 ? 0 : activeImage + 1 })
  }

  handlePrev = () => {
    const { activeImage } = this.state
    const { images } = this.props

    this.setState({ activeImage: activeImage === 0 ? images.length - 1 : activeImage - 1 })
  }

  closeModal = async () => {
    await this.setState({ showModal: false })
    await timeout(500)
    await this.setState({ activeImage: null })
  }

  preload = (imageArray, index = 0) => {
    const { images } = this.props
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = images[index]
      img.onload = () => this.preload(imageArray, index + 1)
    } else {
      this.setAssetsLoaded()
    }
  }

  setAssetsLoaded = async () => {
    await timeout(500)
    this.setState({ assetsLoaded: true })
  }

  render() {
    const {
      activeImage,
      assetsLoaded,
      entranceDelays,
      showModal,
    } = this.state

    const {
      images,
      rowHeight,
      gutterSize,
      numColumns,
      defaultOpacity,
      icon,
    } = this.props

    return (
      <Wrapper>
        <Fade show={!assetsLoaded}>
          {icon || <LoadingSpinner />}
        </Fade>

        <Fade show={assetsLoaded}>
          <Gallery
            images={images}
            rowHeight={rowHeight}
            numColumns={numColumns}
            gutterSize={gutterSize}
            defaultOpacity={defaultOpacity}
            // gutterSize="0.5%"
            openModal={this.openModal}
            show={assetsLoaded}
            entranceDelays={entranceDelays}
            activeImage={activeImage}
          />
        </Fade>

        <GalleryModal
          show={showModal}
          image={images[activeImage]}
          closeModal={this.closeModal}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
        />
      </Wrapper>
    )
  }
}
