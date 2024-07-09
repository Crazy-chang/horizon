import { useEffect, useState } from 'react'
import { Environment } from '../../../wailsjs/runtime'
import { envType } from '@/types/env'
import { TrafficLightButtons } from '@/components'

export const DraggableBar = (): JSX.Element => {
  const [platform, setPlatform] = useState<string>('')

  useEffect(() => {
    Environment()
      .then((res: envType) => {
        setPlatform(res.platform)
      })
      .catch((err: any) => {
        console.error('err', err)
      })
  }, [])

  return (
    <div
      style={
        {
          width: '100vw',
          height: 40,
          '--wails-draggable': 'drag',
          cursor: 'default',
          userSelect: 'none',
        } as any
      }
    >
      {platform === 'windows' && <TrafficLightButtons />}
    </div>
  )
}
