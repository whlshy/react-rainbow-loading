import React from 'react'
import styles from '../styles/main.styl'
import CSSModules from 'react-css-modules'
import propTypes from 'prop-types'

const RainbowLoading = (props) => {
  const { style, className } = props
  return (
    <div className={className || ''} style={style || {}}>
      <div className="whl-loader-inner">
        <div className="whl-loader-line-wrap">
          <div className="whl-loader-line"></div>
        </div>
        <div className="whl-loader-line-wrap">
          <div className="whl-loader-line"></div>
        </div>
        <div className="whl-loader-line-wrap">
          <div className="whl-loader-line"></div>
        </div>
        <div className="whl-loader-line-wrap">
          <div className="whl-loader-line"></div>
        </div>
        <div className="whl-loader-line-wrap">
          <div className="whl-loader-line"></div>
        </div>
      </div>
    </div>
  )
}

RainbowLoading.propTypes = {
  /** classNameName */
  classNameName: propTypes.string,
  /** style */
  style: propTypes.object,
}

RainbowLoading.defaultProps = {
  classNameName: "",
  style: {}
}

export default CSSModules(RainbowLoading, styles);