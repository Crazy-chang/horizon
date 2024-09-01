import { Quit, WindowMinimise } from 'wailsjs/runtime/runtime'
import { Cross1Icon, MinusIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const TitleBar = () => {
  return (
    <div className="title-bar-windows-layout">
      <div
        className="title-bar-text"
        style={
          {
            '--wails-draggable': 'drag',
          } as any
        }
      >
        title
      </div>
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
    </div>
  )
}
