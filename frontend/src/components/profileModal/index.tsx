import React, { useState } from 'react'
import { Dialog, Avatar, IconButton, Text, ScrollArea } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Cross1Icon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { modalType } from '@/types/modal'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'

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

        <ScrollArea
          type="hover"
          scrollbars="vertical"
          style={{ height }}
        >
          <div className="profile-modal-layout">
            <div className="pm-action-button">
              <IconButton
                onClick={onClose}
                variant="soft"
                radius="full"
                color="gray"
              >
                <Cross1Icon />
              </IconButton>

              <IconButton
                className="more-button"
                onClick={onClose}
                variant="soft"
                radius="full"
                color="gray"
              >
                <DotsHorizontalIcon />
              </IconButton>
            </div>

            <div className="profile-avatar-layout">
              <div className="pm-ip-loc">IP属地：河北</div>
              <div
                className="background-image"
                style={{
                  background: `url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png) no-repeat center center / cover`,
                  filter: 'blur(12px)',
                }}
              />
              <Avatar
                className="profile-avatar"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                fallback="A"
              />
            </div>

            <div className="profile-detail-layout">
              <div className="pm-nickname">
                <Text
                  as="div"
                  align="center"
                  size="6"
                >
                  晚上吃桃子
                </Text>
                <Text
                  as="div"
                  align="center"
                  size="2"
                >
                  还没有设置签名
                </Text>
              </div>
            </div>
          </div>
        </ScrollArea>
      </Dialog.Content>
    </Dialog.Root>
  )
}
