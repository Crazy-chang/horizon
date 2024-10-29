import React, { useState } from 'react'
import { Modal, ProfileModal } from '@/components'
import { modalType } from '@/types/modal'
import {
  Avatar,
  Box,
  Button,
  Dialog,
  Flex,
  Grid,
  Text,
  ScrollArea,
} from '@radix-ui/themes'
import { CheckIcon } from '@radix-ui/react-icons'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'

type IProps = {
  type: 'FOLLOWING' | 'FOLLOWER'
} & modalType

export const FollowModal: React.FC<IProps> = ({ type, onClose, open }) => {
  const [height] = useState<number>(useDisplayInfo().Height * 0.4)
  const [profileModal, setProfileModal] = useState<{
    open: boolean
    uid: string
  }>({
    open: false,
    uid: '',
  })
  const count = [1]

  return (
    <Modal
      title={type === 'FOLLOWING' ? '我的关注' : '我的粉丝'}
      open={open}
      onClose={onClose}
    >
      <div className="follow-modal">
        <ScrollArea
          type="hover"
          scrollbars="vertical"
          style={{ height }}
        >
          <Grid
            columns="2"
            mt="3"
            mr="4"
            gap="4"
            width="auto"
          >
            {count.map((item: any, index: number) => (
              <Box
                className="chunk"
                mb="4"
                key={index}
              >
                <Flex gap="2">
                  <Avatar
                    className="avatar"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                    onClick={() => {
                      setProfileModal({
                        open: true,
                        uid: '123',
                      })
                    }}
                  />
                  <Box>
                    <Text
                      className="nickname"
                      mb="1"
                      size="3"
                    >
                      不开玩笑 Jokes Aside
                    </Text>
                  </Box>
                  <Button
                    variant="soft"
                    color="gray"
                    size="1"
                  >
                    <CheckIcon />
                    已关注
                  </Button>
                </Flex>
              </Box>
            ))}
          </Grid>
        </ScrollArea>
      </div>

      <Flex
        gap="3"
        mt="4"
        justify="end"
      >
        <Dialog.Close>
          <Button
            variant="soft"
            color="gray"
          >
            关闭
          </Button>
        </Dialog.Close>
      </Flex>

      <ProfileModal
        uid={profileModal.uid}
        open={profileModal.open}
        onClose={() => {
          setProfileModal({
            open: false,
            uid: '',
          })
        }}
      />
    </Modal>
  )
}
