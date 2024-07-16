import * as React from 'react'
import { Slider } from '@radix-ui/themes'
import './index.modules.scss'

export const ProgressBar = () => {
  return (
    <div className="progress-bar-layout">
      <div className="time">0:00 / 12:00</div>
      <div className="progress-slider">
        <Slider
          radius="small"
          value={[0]}
          variant="soft"
        />
      </div>
    </div>
  )
}
