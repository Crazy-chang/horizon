import React from 'react'
import { Modal } from 'antd'
import { Box, Tabs, Text, Button } from '@radix-ui/themes'
import './index.modules.scss'

type IProps = {
  open: boolean
  onClose: () => void
}

/**
 * 收听数据弹窗
 */
export const MileageModal: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      maskClosable={false}
      onCancel={onClose}
      footer={false}
      title="收听数据"
      width={'50%'}
      loading={false}
    >
      <div className="tagline-layout">
        <div>144小时52分钟</div>
        <div>谷神星自转了15圈</div>
      </div>

      <div>lists</div>
    </Modal>
  )
}
