import React from 'react'
import { Dialog } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { modalType } from '@/types/modal'

export const Modal: React.FC<modalType> = ({
  title,
  open,
  onClose,
  children,
}) => {
  // https://github.com/radix-ui/primitives/discussions/1997
  const avoidDefaultDomBehavior = (e: Event) => {
    e.preventDefault()
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onClose}
    >
      <Dialog.Content
        onPointerDownOutside={avoidDefaultDomBehavior}
        onInteractOutside={avoidDefaultDomBehavior}
      >
        <Dialog.Title style={{ userSelect: 'none' }}>{title}</Dialog.Title>

        <VisuallyHidden.Root>
          <Dialog.Description
            size="2"
            mb="4"
          />
        </VisuallyHidden.Root>

        {children}
      </Dialog.Content>
    </Dialog.Root>
  )
}
