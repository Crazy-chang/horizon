import React from 'react'
import { useBack } from '@/hooks'

export const Player = () => {
  const back = useBack()

  return (
    <div>
      <div
        onClick={() => {
          back()
        }}
      >
        go back
      </div>
      player
    </div>
  )
}
