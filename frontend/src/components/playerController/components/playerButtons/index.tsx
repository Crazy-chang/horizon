import {
  BsPlayFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from 'react-icons/bs'
import { Tooltip } from '@radix-ui/themes'
import { HeartIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const PlayerButtons = () => {
  return (
    <div className="player-buttons-layout">
      <div className="buttons">
        <Tooltip content="收藏">
          <div className="button">
            <HeartIcon />
          </div>
        </Tooltip>

        <Tooltip content="向后15秒">
          <div className="button">
            <BsSkipBackwardFill />
          </div>
        </Tooltip>

        <Tooltip content="播放">
          <div className="button">
            <BsPlayFill />
          </div>
        </Tooltip>

        <Tooltip content="向前15秒">
          <div className="button">
            <BsSkipForwardFill />
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
