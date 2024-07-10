import React from 'react'
import { ColorfulShadowType } from '@/types/colorfulShadow'
import './index.modules.scss'

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
