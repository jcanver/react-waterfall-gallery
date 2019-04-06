import React, {Component} from 'react'
import { Global, css } from '@emotion/core'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <Global
          styles={{
            'html, body': {
              margin: '0',
              backgroundColor: '#111111',
            }
          }}
        />
        <Example />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
