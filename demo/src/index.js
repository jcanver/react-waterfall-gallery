import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { render } from 'react-dom' // eslint-disable-line

import Example from '../../src'
import demoImages from './assets/photos-hq'

class Demo extends Component {
  render() {
    return (
      <div>
        <Global
          styles={{
            'html, body': {
              margin: '0',
            },
          }}
        />
        <Example
          images={demoImages}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
