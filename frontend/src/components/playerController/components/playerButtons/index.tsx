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
          <HeartIcon />
        </div>

        <div className="button">
          <BsSkipBackwardFill />
        </div>

        <div className="button">
          <BsPlayFill />
        </div>

        <div className="button">
          <BsSkipForwardFill />
        </div>
      </div>
    </div>
  )
}
