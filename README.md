# react-waterfall-gallery

<!-- [![Travis][build-badge]][build] -->
[![Status](https://travis-ci.org/jcanver/react-waterfall-gallery.svg?branch=master)](https://travis-ci.org/jcanver/react-waterfall-gallery) 
[![npm version](https://badge.fury.io/js/react-waterfall-gallery.svg)](https://badge.fury.io/js/react-waterfall-gallery)
[![Download Count](http://img.shields.io/npm/dm/react-waterfall-gallery.svg?style=flat)](http://www.npmjs.com/package/react-waterfall-gallery)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
<!-- [![Coveralls][coveralls-badge]][coveralls] -->

### Preview
<img alt="react-waterfall-gallery demo" src="http://www.johncanver.com/projects/react-waterfall-gallery/static/waterfall-example-short.gif">


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
| images | Array | [] | (Required) Array of image sources |
| numColumns | number | 4 | (Optional) Number of grid columns |
| rowHeight | string | 150px | (Optional) Height of each row/thumbnail |
| gutterSize | string | 15px | (Optional) Size of grid gutter (space between thumbnails) |
| defaultOpacity | number | 0.65 | (Optional) Opacity of thumbnail (hovering over thumbnail causes full opacity) |
| icon | Component | null | (Optional) Component to display instead of default loading spinner |
| direction | string | bottom | (Optional) Direction of waterfall entrances; Valid parameters include: bottom, top, left, right |
| step | number | 200 | (Optional) Time (in milliseconds) between each image's entrance in waterfall animation |

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
