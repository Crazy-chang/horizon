import React, { useEffect, useState } from 'react'
import { Modal } from '@/components'
import { modalType } from '@/types/modal'
import './index.modules.scss'
import {
  Button,
  Dialog,
  Flex,
  Separator,
  Box,
  Avatar,
  Text,
  Heading,
  ScrollArea,
} from '@radix-ui/themes'
import { useDisplayInfo } from '@/hooks'

type IProps = {
  data: any
} & modalType

/**
 * 收听数据弹窗
 */
export const MileageModal: React.FC<IProps> = ({ data, open, onClose }) => {
  const [height] = useState(useDisplayInfo().Height * 0.4)
  const [playedData, setPlayedData] = useState<any>({})

  useEffect(() => {
    if (open) {
      setPlayedData(data)
    }
  }, [open])

  return (
    <Modal
      title="收听数据"
      open={open}
      onClose={onClose}
    >
      <div className="tagline-layout">
        <div>
          <span className="num">
            {playedData?.time ? playedData.time[0] : '-'}
          </span>
          小时
          <span className="num">
            {playedData?.time ? playedData.time[1] : '-'}
          </span>
          分钟
        </div>
        <div>{playedData.tagline}</div>
      </div>

      <Separator
        my="3"
        size="4"
      />

      <div>
        <ScrollArea
          type="auto"
          scrollbars="vertical"
          style={{ maxHeight: height }}
        >
          <Box
            width="100%"
            height="3rem"
            mb="4"
          >
            <Flex gap="2">
              <Avatar
                style={{ width: '3rem', height: '3rem' }}
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Box>
                <Heading
                  mb="1"
                  size="3"
                >
                  不开玩笑 Jokes Aside
                </Heading>
                <Text className="played-time">114小时52分钟</Text>
              </Box>
            </Flex>
          </Box>
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
    </Modal>
  )
}
