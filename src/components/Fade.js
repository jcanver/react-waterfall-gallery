import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

function getStarts(top, bottom, left, right) {
  return {
    top: top ? (typeof top === 'object' ? top.start : '-40px') : 'auto',
    bottom: bottom ? (typeof bottom === 'object' ? bottom.start : '-40px') : 'auto',
    left: left ? (typeof left === 'object' ? left.start : '-40px') : 'auto',
    right: right ? (typeof right === 'object' ? right.start : '-40px') : 'auto'
  }
}
function getFinishes(top, bottom, left, right) {
  return {
    top: top ? (typeof top === 'object' ? top.finish : '0') : 'auto',
    bottom: bottom ? (typeof bottom === 'object' ? bottom.finish : '0') : 'auto',
    left: left ? (typeof left === 'object' ? left.finish : '0') : 'auto',
    right: right ? (typeof right === 'object' ? right.finish : '0') : 'auto'
  }
}

const getDefaultStyles = (speed, styles) => ({
  transition: `opacity ${speed}ms, left ${speed}ms, right ${speed}ms, top ${speed}ms, bottom ${speed}ms`,
  opacity: 0,
  position: 'relative',
  ...styles
})
const getTransitionStyles = (top, bottom, left, right) => ({
  entering: { opacity: 0, pointerEvents: 'none', ...getStarts(top, bottom, left, right) },
  entered: { opacity: 1, pointerEvents: 'auto', ...getFinishes(top, bottom, left, right) },
  exiting: { opacity: 1, pointerEvents: 'auto', ...getFinishes(top, bottom, left, right) },
  exited: { opacity: 0, pointerEvents: 'none', ...getStarts(top, bottom, left, right) }
})

function Fade({ children, show, timeout, speed, top, bottom, left, right, styles }) {
  return (
    <Transition in={show} timeout={timeout}>
      {state => (
        <div style={{
          ...getDefaultStyles(speed, styles),
          ...getTransitionStyles(top, bottom, left, right)[state],
        }}
        >
          {children}
        </div>
      )}
    </Transition>
  )
}

Fade.defaultProps = {
  timeout: 0,
  speed: 800
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  timeout: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  styles: PropTypes.object,
  top: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  bottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  left: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  right: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
}

export default Fade
