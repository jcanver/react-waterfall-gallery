import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import media from '../utils/media'
import Thumbnail from './Thumbnail'

const Grid = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  grid-template-columns: ${(props) => {
    let result = 'auto'
    let i = 1
    for (i; i < props.numColumns; i += 1) {
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

export default function Gallery({
  entranceDelays,
  gutterSize,
  rowHeight,
  images,
  show,
  openModal,
  numColumns,
  defaultOpacity,
}) {
  return (
    <Grid numColumns={numColumns} gutterSize={gutterSize}>
      {images.map((image, index) => (
        <Thumbnail
          key={image}
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
  images: PropTypes.array.isRequired,
  entranceDelays: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  numColumns: PropTypes.number.isRequired,
  defaultOpacity: PropTypes.number.isRequired,
  rowHeight: PropTypes.string.isRequired,
  gutterSize: PropTypes.string.isRequired,
}
