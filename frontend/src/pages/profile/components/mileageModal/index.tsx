import React, { useState } from 'react'
import { Modal } from '@/components'
import { modalType } from '@/types/modal'
import './index.modules.scss'
import { Button, Dialog, Flex } from '@radix-ui/themes'

/**
 * 收听数据弹窗
 */
export const MileageModal: React.FC<modalType> = ({ open, onClose }) => {
  const [content, setContent] = useState('')
  return (
    <Modal
      title="收听数据"
      open={open}
      onClose={onClose}
    >
      {content || <div>暂无数据</div>}
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
