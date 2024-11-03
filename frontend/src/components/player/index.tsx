import React from 'react'
import { IconButton } from '@radix-ui/themes'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'

const TEMP_BACKGROUND_IMAGE: string =
  'https://image.xyzcdn.net/FnQ-E7VcqLbzqplvdVPGrQRGHmxC.jpg@large'

interface IProps {
  open: boolean
  onClose: () => void
}

export const Player: React.FC<IProps> = ({ open, onClose }) => {
  const [height] = React.useState<number>(useDisplayInfo().Height - 35)
  const [width] = React.useState<number>(useDisplayInfo().Width)

  return (
    <div
      style={
        open
          ? { width, height, transform: `translateY(-${height}px)` }
          : { width, height, transform: `translateY(${height}px)` }
      }
      className="player-drawer-layout"
    >
      <div className="test" />
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

      <div className="content">content</div>
    </div>
  )
}
