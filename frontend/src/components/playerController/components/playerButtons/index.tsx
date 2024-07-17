import * as React from 'react'
import { Button } from '@radix-ui/themes'
import {
  BsPlayFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from 'react-icons/bs'
import { HeartIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const PlayerButtons = () => {
  return (
    <div className="player-buttons-layout">
      <div className="buttons">
        <div className="button">
          {/* <Button variant="soft"> */}
          <HeartIcon />
          {/* </Button> */}
        </div>

        <div className="button">
          {/* <Button
            size="1"
            variant="soft"
          > */}
          <BsSkipBackwardFill />
          {/* </Button> */}
        </div>
        <div className="button">
          {/* <Button
            size="1"
            variant="classic"
          > */}
          <BsPlayFill />
          {/* </Button> */}
        </div>
        <div className="button">
          {/* <Button
            size="1"
            variant="soft"
          > */}
          <BsSkipForwardFill />
          {/* </Button> */}
        </div>
      </div>
    </div>
  )
}
