import React from 'react'
import { IconButton } from '@radix-ui/themes'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useDisplayInfo } from '@/hooks'
import { CoverBox } from './components/coverBox'
import './index.modules.scss'

const TEMP_BACKGROUND_IMAGE: string =
  'https://image.xyzcdn.net/FnQ-E7VcqLbzqplvdVPGrQRGHmxC.jpg@large'

type IProps = {
  open: boolean
  onClose: () => void
}

export const Player: React.FC<IProps> = ({ open, onClose }) => {
  const [height] = React.useState<number>(useDisplayInfo().Height - 35)
  const [width] = React.useState<number>(useDisplayInfo().Width)

  return (
    <div
      style={{
        width,
        height,
        transform: open
          ? `translateY(-${height}px)`
          : `translateY(${height}px)`,
      }}
      className="player-drawer-layout"
    >
      <div
        className="player-background-image"
        style={{
          background: `url(${TEMP_BACKGROUND_IMAGE}) no-repeat center center / cover`,
        }}
      />

      <div className="close-button">
        <IconButton
          onClick={onClose}
          variant="ghost"
          mt="1"
          color="gray"
          radius="full"
        >
          <CaretDownIcon
            width={30}
            height={30}
          />
        </IconButton>
      </div>

      <div className="player-content">
        <div className="player-left">
          <CoverBox />
        </div>
        <div className="player-right">right</div>
      </div>
    </div>
  )
}
