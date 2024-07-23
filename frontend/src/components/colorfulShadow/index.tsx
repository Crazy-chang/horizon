import React from 'react'
import './index.modules.scss'
import { PlayIcon } from '@radix-ui/react-icons'

interface ColorfulShadowType {
  style?: React.CSSProperties
  src: string
  mask?: boolean
  curPointer?: boolean
}

/**
 * 封面展示组件
 * @param style React.CSSProperties
 * @param src 封面 url
 * @param mask 是否展示遮罩
 * @param curPointer 光标指针是否展示为“手型”
 * @returns
 */
export const ColorfulShadow: React.FC<ColorfulShadowType> = ({
  style,
  src,
  mask = false,
  curPointer = false,
}): JSX.Element => {
  return (
    <div
      className="colorful-shadow-layout"
      style={style}
    >
      <div
        className="pic-box"
        style={{ cursor: `${curPointer ? 'pointer' : 'default'}` }}
      >
        <img
          src={src}
          className="origin_pic"
        />
        <img
          src={src}
          className="shadow"
        />
        {mask && (
          <div className="mask">
            <div className="circle">
              <PlayIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
