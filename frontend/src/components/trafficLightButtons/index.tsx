import React, { useEffect } from 'react'
import { Cross2Icon, MinusIcon } from '@radix-ui/react-icons'
import { WindowMinimise, Quit } from '../../../wailsjs/runtime'
import './index.modules.scss'

export const TrafficLightButtons = () => {
  const onMinimise = () => {
    WindowMinimise()
  }

  const onQuit = () => {
    Quit()
  }

  return (
    <div className="traffic-ligh-buttons-layout">
      <div className="button-box">
        <div
          className="button"
          onClick={() => {
            onQuit()
          }}
        >
          <Cross2Icon className="icon" />
        </div>
        <div
          className="button"
          onClick={() => {
            onMinimise()
          }}
        >
          <MinusIcon className="icon" />
        </div>
      </div>
    </div>
  )
}
