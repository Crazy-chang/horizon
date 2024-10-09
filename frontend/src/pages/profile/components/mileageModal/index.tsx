import React, { useState } from 'react'
import { Modal } from '@/components'
import { modalType } from '@/types/modal'
import './index.modules.scss'
import { Button, Dialog, Flex, Separator } from '@radix-ui/themes'

/**
 * 收听数据弹窗
 */
export const MileageModal: React.FC<modalType> = ({ open, onClose }) => {
  return (
    <Modal
      title="收听数据"
      open={open}
      onClose={onClose}
    >
      <div className="tagline-layout">
        <div>
          <span className="num">144</span>小时<span className="num">52</span>
          分钟
        </div>
        <div>木星上已经过去了14天</div>
      </div>

      <Separator
        my="3"
        size="4"
      />

      <div>lists</div>

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
