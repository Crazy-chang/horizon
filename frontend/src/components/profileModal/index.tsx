import React, { useState } from 'react'
import { Dialog, Button } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { modalType } from '@/types/modal'
import { useDisplayInfo } from '@/hooks'

type IProps = {
  uid: string
} & modalType

export const ProfileModal: React.FC<IProps> = ({ uid, open, onClose }) => {
  const [width] = useState<number>(useDisplayInfo().Width * 0.5)
  const [height] = useState<number>(useDisplayInfo().Height * 0.7)
  const avoidDefaultDomBehavior = (e: Event) => {
    e.preventDefault()
  }

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
        {uid}
        <Button onClick={onClose}>close</Button>
      </Dialog.Content>
    </Dialog.Root>
  )
}
