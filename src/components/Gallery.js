import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../utils/media'
import Flex from './Flex'
import Thumbnail from './Thumbnail'

const Grid = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  grid-template-columns: ${props => {
    let result = 'auto'
    let i = 1
    for (i; i < props.numColumns; i++) {
      result += ' auto'
    }
    return result
  }};
  grid-gap: ${props => props.gutterSize};
  ${media.mdDown`
    grid-template-columns: auto auto;
  `}
  ${media.smDown`
    grid-template-columns: auto;
  `}
`

function Gallery({
  entranceDelays,
  activeImage,
  gutterSize,
  rowHeight,
  images,
  handleClick,
  show,
  photoDelays,
  openModal,
  numColumns,
  defaultOpacity,
}) {
  return (
    <Grid numColumns={numColumns} gutterSize={gutterSize}>
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          index={index}
          image={images[index]}
          handleClick={openModal}
          show={show}
          timeout={entranceDelays[index]}
          rowHeight={rowHeight}
          defaultOpacity={defaultOpacity}
        />
      ))}
    </Grid>
  )
}

Gallery.propTypes = {
  items: PropTypes.array,
  remaining: PropTypes.array,
  handleClick: PropTypes.func
}

export default Gallery
