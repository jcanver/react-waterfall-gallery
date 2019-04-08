# react-preloaded-gallery

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

### Preview
[<img width="400" alt="react-awesome-button demo" src="http://www.johncanver.com/projects/react-waterfall-gallery/static/waterfall-example.gif">]


### Installation

`npm install --save react-waterfall-gallery`

or

`yarn add react-waterfall-gallery`

### Example

```
import React from 'react'
import Gallery from 'react-waterfall-gallery'

const images = [
  'http://lorempixel.com/1200/800/',
  'http://lorempixel.com/1200/800/',
  'http://lorempixel.com/1200/800/',
  'http://lorempixel.com/1200/800/',
  'http://lorempixel.com/1200/800/',
]

class MyComponent extends React.Component {
  render () {
    return (
      <Gallery
        images={images}
      />
    )
  }
}
```

### Props
| Prop  | Type  | Default  | Description  |
|:------|:------|:---------|:-------------|
| images | Array | [] | (Required) Array of images sources |
| numColumns | number | 4 | (Optional) Number of grid columns |
| rowHeight | string | '150px' | (Optional) Height of each row/thumbnail |
| gutterSize | string | '15px' | (Optional) Size of grid gutter (space between thumbnails) |
| defaultOpacity | number | 0.65 | (Optional) Opacity of thumbnail (hovering over thumbnail causes full opacity) |
| icon | Component | null | (Optional) Component to display instead of default loading spinner |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
