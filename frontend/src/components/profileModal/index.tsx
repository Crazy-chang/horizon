import React, { useEffect, useState } from 'react'
import { Dialog, Avatar, IconButton } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Cross1Icon } from '@radix-ui/react-icons'
import { modalType } from '@/types/modal'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'
import { envType } from '@/types/env'
import { Environment } from '../../../wailsjs/runtime'

type IProps = {
  uid: string
} & modalType

export const ProfileModal: React.FC<IProps> = ({ uid, open, onClose }) => {
  const [envInfo, setEnvInfo] = useState<envType>()
  const [width] = useState<number>(useDisplayInfo().Width * 0.5)
  const [height] = useState<number>(useDisplayInfo().Height * 0.7)

  const avoidDefaultDomBehavior = (e: Event) => {
    e.preventDefault()
  }

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onClose}
    >
      <Dialog.Content
        style={{ maxWidth: width, height, padding: 0 }}
        onPointerDownOutside={avoidDefaultDomBehavior}
        onInteractOutside={avoidDefaultDomBehavior}
      >
        <VisuallyHidden.Root>
          <Dialog.Title />
          <Dialog.Description />
        </VisuallyHidden.Root>

        <div className="profile-modal-layout">
          <IconButton
            style={
              envInfo?.platform === 'darwin'
                ? { left: '1rem' }
                : { right: '1rem' }
            }
            className="close-button"
            onClick={onClose}
            variant="soft"
            radius="full"
          >
            <Cross1Icon />
          </IconButton>

          <div className="profile-avatar-layout">
            <div
              className="background-image"
              style={{
                background: `url(https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop) no-repeat center center / cover`,
                filter: 'blur(12px)',
              }}
            />
            <Avatar
              className="profile-avatar"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
