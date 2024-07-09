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
        PlayController
        <Button
          onClick={() => {
            onOpen()
          }}
        >
          OPEN
        </Button>
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
