import React, {Component} from 'react'
import styled from '@emotion/styled'
import timeout from './utils/timeout'

import Fade from './components/Fade'
import Gallery from './components/Gallery'
import GalleryModal from './components/GalleryModal'
import LoadingSpinner from './components/LoadingSpinner'

const Wrapper = styled.div`
`

import testImages from './assets/photos-hq'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assetsLoaded: false,
      showModal: false,
      activeImage: null,
      entranceDelays: this.props.images.map((p, index) => (index + 1) * 200),
    }
  }

  static defaultProps = {
    images: testImages,
    rowHeight: '200px',
    numColumns: 8,
    gutterSize: '15px',
    defaultOpacity: 0.65,
  }

  componentDidMount() {
    this.preload(this.props.images)
  }

  openModal = async (activeImage) => this.setState({ activeImage, showModal: true })

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

  closeModal = async (activeImage) => {
    await this.setState({ showModal: false })
    await timeout(500)
    await this.setState({ activeImage: null })
  }
  
  preload = (imageArray, index = 0) => {
    if (imageArray && imageArray.length > index) {
      const img = new Image()
      img.src = this.props.images[index]
      img.onload = () => this.preload(imageArray, index + 1)
    } else {
      setTimeout(
        () => this.setState({ assetsLoaded: true }), 500)
    }
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
