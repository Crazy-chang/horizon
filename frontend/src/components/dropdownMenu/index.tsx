import React from 'react'
import { DropdownMenu } from '@radix-ui/themes'
import { myDropdownMenuType, myDropdownMenuItem } from '@/types/myDropdownMenu'

export const MyDropdownMenu: React.FC<myDropdownMenuType> & {
  Item: React.FC<myDropdownMenuItem>
  Separator: typeof DropdownMenu.Separator
} = ({ open, onClose, children, trigger }) => {
  return (
    <DropdownMenu.Root
      open={open}
      onOpenChange={onClose}
    >
      <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content color="gray">{children}</DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

MyDropdownMenu.Item = ({ children, danger }) => (
  <DropdownMenu.Item color={danger ? 'red' : undefined}>
    {children}
  </DropdownMenu.Item>
)
MyDropdownMenu.Separator = DropdownMenu.Separator
