import React, { useState } from 'react'
import { Modal } from '@/components'
import { modalType } from '@/types/modal'
import {
  AspectRatio,
  Box,
  Button,
  Dialog,
  Flex,
  Grid,
  ScrollArea,
} from '@radix-ui/themes'
import './index.modules.scss'
import { useDisplayInfo } from '@/hooks'

/**
 * 我的贴纸库弹窗
 */
export const StickerModal: React.FC<modalType> = ({ open, onClose }) => {
  const [height, _] = useState(useDisplayInfo().Height * 0.4)

  return (
    <Modal
      title="我的贴纸库"
      open={open}
      onClose={onClose}
    >
      <div className="total">共 8 张贴纸</div>

      <ScrollArea
        type="auto"
        scrollbars="vertical"
        style={{ maxHeight: height }}
      >
        <Grid
          columns="3"
          mt="3"
          gap="3"
          rows="repeat(2, 30px)"
          width="auto"
        >
          <Box
            width="100%"
            height="20rem"
            mb="4"
          >
            {/* <AspectRatio ratio={8 / 8}> */}
            <img
              src="https://image.xyzcdn.net/stickers/statics/2024.png@large"
              alt="A house in a forest"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                borderRadius: 'var(--radius-2)',
              }}
            />
            {/* </AspectRatio> */}
          </Box>
        </Grid>
      </ScrollArea>

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
