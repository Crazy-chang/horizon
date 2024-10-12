import React from 'react'
import { Button } from '@radix-ui/themes'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'

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
      drawer-{height}
      <Button onClick={onClose}>close</Button>
    </div>
  )
}
