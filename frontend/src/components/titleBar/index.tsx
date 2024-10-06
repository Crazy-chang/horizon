import { useEffect, useState } from 'react'
import { Quit, WindowMinimise } from 'wailsjs/runtime/runtime'
import { Cross1Icon, MinusIcon } from '@radix-ui/react-icons'
import { Environment } from 'wailsjs/runtime'
import { envType } from '@/types/env'
import './index.modules.scss'

export const TitleBar = () => {
  const [envInfo, setEnvInfo] = useState<envType>()

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <div
      className={
        envInfo?.platform === 'darwin'
          ? 'title-bar-mac-layout'
          : 'title-bar-windows-layout'
      }
      style={
        {
          '--wails-draggable': 'drag',
        } as any
      }
    >
      <div className="title-bar-text" />
      {envInfo?.platform !== 'darwin' && (
        <div className="title-bar-button">
          <div
            onClick={() => {
              WindowMinimise()
            }}
          >
            <MinusIcon />
          </div>
          <div
            onClick={() => {
              Quit()
            }}
          >
            <Cross1Icon />
          </div>
        </div>
      )}
    </div>
  )
}
