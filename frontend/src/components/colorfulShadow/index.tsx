import React from 'react'
import './index.modules.scss'

interface ColorfulShadowType {
  style?: React.CSSProperties
  src: string
}

export const ColorfulShadow: React.FC<ColorfulShadowType> = (
  props
): JSX.Element => {
  return (
    <div
      className="colorful-shadow-layout"
      style={props.style}
    >
      <div className="pic-box">
        <img
          src={props.src}
          className="origin_pic"
        />
        <img
          src={props.src}
          className="shadow"
        />
      </div>
    </div>
  )
}
