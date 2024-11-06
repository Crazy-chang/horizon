import React, { useState } from 'react'
import {
  Dialog,
  Avatar,
  IconButton,
  Text,
  ScrollArea,
  Flex,
  Separator,
  Card,
} from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import {
  ChevronRightIcon,
  Cross1Icon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import { modalType } from '@/types/modal'
import { useDisplayInfo } from '@/hooks'
import './index.modules.scss'
import { StickerModal } from '@/pages/profile/components/stickerModal'
import { ColorfulShadow, MyDropdownMenu } from '@/components'
import { SlBubble, SlEarphones } from 'react-icons/sl'

type IProps = {
  uid: string
} & modalType

export const ProfileModal: React.FC<IProps> = ({ uid, open, onClose }) => {
  const [width] = useState<number>(useDisplayInfo().Width * 0.5)
  const [height] = useState<number>(useDisplayInfo().Height * 0.7)
  const [stickerModalOpen, setStickerModalOpen] = useState<boolean>(false)
  const [dropDownMenuOpen, setDropDownMenuOpen] = useState<boolean>(false)

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
          type="scroll"
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

              <MyDropdownMenu
                open={dropDownMenuOpen}
                onClose={() => {
                  setDropDownMenuOpen(false)
                }}
                trigger={
                  <IconButton
                    className="more-button"
                    onClick={() => {
                      setDropDownMenuOpen(true)
                    }}
                    variant="soft"
                    radius="full"
                    color="gray"
                  >
                    <DotsHorizontalIcon />
                  </IconButton>
                }
              >
                <MyDropdownMenu.Item>取消关注</MyDropdownMenu.Item>
                <MyDropdownMenu.Item danger>加入黑名单</MyDropdownMenu.Item>
              </MyDropdownMenu>
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
                radius="full"
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
                  mt="2"
                >
                  还没有设置签名
                </Text>
              </div>

              <div className="pm-follow">
                <Flex
                  gap="3"
                  align="center"
                >
                  <div className="chunk">
                    <p>1</p>
                    <p>关注</p>
                  </div>
                  <Separator
                    className="separator"
                    size="2"
                    orientation="vertical"
                  />
                  <div className="chunk">
                    <p>0</p>
                    <p>粉丝</p>
                  </div>
                  <Separator
                    className="separator"
                    size="2"
                    orientation="vertical"
                  />
                  <div className="chunk">
                    <p>9</p>
                    <p>订阅</p>
                  </div>
                  <Separator
                    className="separator"
                    size="2"
                    orientation="vertical"
                  />
                  <div className="chunk">
                    <p>
                      405<span>时</span>22<span>分</span>
                    </p>
                    <p>收听时长</p>
                  </div>
                </Flex>
              </div>
            </div>

            <div className="pm-podcast-layout">
              <div className="pm-podcast-content">
                <h3>她的播客</h3>

                <div className="pm-podcast-item">
                  <div className="left">
                    <ColorfulShadow
                      className="episode-cover"
                      curPointer
                      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    />
                  </div>
                  <div className="right">
                    <p>昭运酒馆</p>
                    <p>更新至第138期</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pm-sticker-layout">
              <div className="pm-sticker-content">
                <h3>她的贴纸库</h3>

                <Card
                  className="sticker-card"
                  onClick={() => {
                    setStickerModalOpen(true)
                  }}
                >
                  <div>
                    7张贴纸
                    <ChevronRightIcon />
                  </div>
                  <div>最新：过了一个播客日</div>
                </Card>
              </div>
            </div>

            <div className="pm-history-content">
              <h3>最近听过</h3>

              <div className="pm-history-episode-item">
                <div className="left">
                  <ColorfulShadow
                    className="episode-cover"
                    curPointer
                    mask
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  />
                </div>
                <div className="right">
                  <p>小米SU7营销复盘：你所知道的为什么都是错的-Vol 46</p>
                  <p>
                    本期节目关注风口上的小米汽车，主播借助在营销、产品上的经验解答。欢迎在评论区留言发表你对小米汽车的感受与看法，对于节目话题的更多观点，获取更多未呈现在节目中的扩展阅读，欢迎加群讨论
                  </p>
                  <p>
                    <span>30分钟 · 03/29</span>
                    <span>
                      <SlEarphones />
                      4.3万+
                      <SlBubble />
                      349
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <StickerModal
            open={stickerModalOpen}
            onClose={() => {
              setStickerModalOpen(false)
            }}
          />
        </ScrollArea>
      </Dialog.Content>
    </Dialog.Root>
  )
}
