import React from 'react'
import { Cross2Icon, MinusIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const TrafficLightButtons = () => {
  return (
    <div className="traffic-ligh-buttons-layout">
      <div className="button-box">
        <div className="button">
          <Cross2Icon className="icon" />
        </div>
        <div className="button">
          <MinusIcon className="icon" />
        </div>
      </div>
    </div>
  )
}
