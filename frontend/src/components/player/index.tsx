import React from 'react'
import { Drawer } from 'antd'
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'

interface IProps {
  open: boolean
  onClose: () => void
}

const drawerStyles: DrawerStyles = {
  header: {
    '--wails-draggable': 'drag',
    cursor: 'default',
    userSelect: 'none',
  } as any,
  // content: {
  //   opacity: 0.5, // FIXME
  // },
}

export const Player: React.FC<IProps> = ({ open, onClose }) => {
  const [height, _] = React.useState<number>(useDisplayInfo().Height - 35)

  return (
    <Drawer
      className="my-drawer"
      onClose={onClose}
      open={open}
      placement="bottom"
      height={height}
      styles={drawerStyles}
      maskClosable={false}
      mask={false}
    >
      <p>player</p>
    </Drawer>
  )
}
