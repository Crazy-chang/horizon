import React from 'react'
import { Dialog, Flex, Spinner } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { modalType } from '@/types/modal'

export const Modal: React.FC<modalType> = ({
  title,
  open,
  onClose,
  children,
  loading,
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
        <Dialog.Title>{title}</Dialog.Title>

        <VisuallyHidden.Root>
          <Dialog.Description
            size="2"
            mb="4"
          />
        </VisuallyHidden.Root>

        {loading ? (
          <Flex justify="center">
            <Spinner size="3" />
          </Flex>
        ) : (
          children
        )}
      </Dialog.Content>
    </Dialog.Root>
  )
}
