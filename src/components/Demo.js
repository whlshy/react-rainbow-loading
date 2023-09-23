import React from 'react'
import RainbowLoading from './RainbowLoading'
import styles from '../styles/Demo.styl'
import CSSModules from 'react-css-modules'

function Demo(props) {
  return (
    <div className='demo'>
      <RainbowLoading />
    </div>
  )
}

export default CSSModules(Demo, styles);