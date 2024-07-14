import React from 'react'
import { Player } from '@/components'
import { Button } from '@radix-ui/themes'
import './index.modules.scss'

export const PlayController = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  const onOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div className="play-controller-layout">
        <div className="left">
          <div className="episode-cover-layout">节目封面</div>
        </div>
        <div className="middle">2</div>
        <div className="right">3</div>
      </div>

      <Player
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}
