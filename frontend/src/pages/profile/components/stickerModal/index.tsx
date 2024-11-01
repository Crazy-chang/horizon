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
  Separator,
  Text,
} from '@radix-ui/themes'
import './index.modules.scss'
import { useDisplayInfo } from '@/hooks'

/**
 * 我的贴纸库弹窗
 */
export const StickerModal: React.FC<modalType> = ({ open, onClose }) => {
  const [height] = useState(useDisplayInfo().Height * 0.6)
  const count = [1, 2, 3, 4, 5]
  const [activeImg, setActiveImg] = useState<any>()
  const [transformStyle, setTransformStyle] = useState({})
  const [maskOpen, setMaskOpen] = useState<boolean>(false)

  const handleClick = (event: any, index: number) => {
    const img = event.target
    const rect = img.getBoundingClientRect()
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const translateX = windowWidth / 2 - (rect.left + rect.width / 2)
    const translateY = windowHeight / 2 - (rect.top + rect.height / 2) - 50

    setTransformStyle({
      transform: `translate(${translateX}px, ${translateY}px) rotateY(360deg) scale(4)`,
      transition: 'transform 0.8s ease-out-in',
    })

    setActiveImg(index)
    setMaskOpen(true)
  }

  return (
    <Modal
      title="我的贴纸库(5)" // TODO
      open={open}
      onClose={onClose}
    >
      <ScrollArea
        type="auto"
        scrollbars="vertical"
        style={{ height }}
      >
        <Grid
          columns="4"
          mt="3"
          gap="3"
          width="auto"
        >
          {count.map((item: any, index: number) => (
            <Box
              width="100%"
              key={item}
              className="sticker-box"
            >
              <AspectRatio ratio={6 / 6}>
                <img
                  src="https://image.xyzcdn.net/stickers/statics/2024.png@large"
                  alt="A house in a forest"
                  className={`sticker-image ${activeImg === index ? 'active' : ''}`}
                  onClick={(event) => {
                    if (!maskOpen) {
                      handleClick(event, index)
                    } else {
                      setMaskOpen(false)
                      setActiveImg(undefined)
                    }
                  }}
                  style={activeImg === index ? transformStyle : {}}
                />
              </AspectRatio>
              <Text className="sticker-name">2024年快乐</Text>
            </Box>
          ))}
        </Grid>
      </ScrollArea>

      {maskOpen && (
        <div className="sticker-mask">
          <div className="sticker-info">
            <Text
              as="p"
              size="6"
              mb="1"
            >
              2024年快乐
            </Text>
            <Text
              as="p"
              className="secondary"
            >
              希望播客能让你快乐
            </Text>

            <div className="sticker-copy">
              <Flex
                mt="5"
                gap="3"
                align="center"
              >
                <Flex direction="column">
                  <Text size="3">小宇宙</Text>
                  <Text
                    size="2"
                    className="secondary"
                  >
                    发行方
                  </Text>
                </Flex>
                <Separator
                  orientation="vertical"
                  size="2"
                />
                <Flex direction="column">
                  <Text size="3">2024.03.13</Text>
                  <Text
                    size="2"
                    className="secondary"
                  >
                    收集日期
                  </Text>
                </Flex>
                <Separator
                  orientation="vertical"
                  size="2"
                />
                <Flex direction="column">
                  <Text size="3">AN-246353965</Text>
                  <Text
                    size="2"
                    className="secondary"
                  >
                    编号
                  </Text>
                </Flex>
              </Flex>
            </div>
          </div>
        </div>
      )}

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
