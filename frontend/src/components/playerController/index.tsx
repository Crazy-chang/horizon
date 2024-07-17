import React from 'react'
import { Player } from '@/components'
import { EpisodeCover } from './components/episodeCover'
import { VolumeController } from './components/volumeController'
import { PlayerButtons } from './components/playerButtons'
import { Slider } from '@radix-ui/themes'
import './index.modules.scss'

export const PlayController = () => {
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <>
      <div className="play-controller-layout">
        <div className="progress-layout">
          <Slider
            className="progress-slider"
            size="1"
            radius="none"
            defaultValue={[30]}
          />
        </div>

        <div className="left">
          <EpisodeCover
            onOpen={() => {
              setOpen(true)
            }}
          />
        </div>

        <div className="middle">
          <PlayerButtons />
        </div>

        <div className="right">
          <VolumeController />
        </div>
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
