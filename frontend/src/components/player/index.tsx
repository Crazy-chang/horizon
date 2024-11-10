import React from 'react'
import { IconButton, Slider, Text, Tooltip } from '@radix-ui/themes'
import { CaretDownIcon } from '@radix-ui/react-icons'
import { useDisplayInfo } from '@/hooks'
import { CoverBox } from './components/coverBox'
import { LiveCount } from './components/liveCount'
import './index.modules.scss'
import {
  BsPlayFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
} from 'react-icons/bs'
import { IoMdThumbsUp, IoMdInformationCircleOutline } from 'react-icons/io'

const TEMP_BACKGROUND_IMAGE: string =
  'https://image.xyzcdn.net/FnQ-E7VcqLbzqplvdVPGrQRGHmxC.jpg@large'

type IProps = {
  open: boolean
  onClose: () => void
}

export const Player: React.FC<IProps> = ({ open, onClose }) => {
  const [height] = React.useState<number>(useDisplayInfo().Height - 35)
  const [width] = React.useState<number>(useDisplayInfo().Width)

  return (
    <div
      style={{
        width,
        height,
        transform: open
          ? `translateY(-${height}px)`
          : `translateY(${height}px)`,
      }}
      className="player-drawer-layout"
    >
      <div
        className="player-background-image"
        style={{
          background: `url(${TEMP_BACKGROUND_IMAGE}) no-repeat center center / cover`,
        }}
      />

      <div className="close-button">
        <IconButton
          onClick={onClose}
          variant="ghost"
          mt="1"
          color="gray"
          radius="full"
        >
          <CaretDownIcon
            width={30}
            height={30}
          />
        </IconButton>
        <LiveCount />
      </div>

      <div className="player-content">
        <div className="player-left">
          <div className="player-left-content">
            <CoverBox hasOpen={open} />
            <Text
              as="p"
              size="7"
              mt="4"
              mb="1"
              align="center"
            >
              159.听听孩子的话，别让TA受伤：聊聊亲子关系
            </Text>
            <Text
              as="p"
              align="center"
              size="5"
              mb="6"
              className="podcast-name"
            >
              不开玩笑 Joker Aside
            </Text>

            <div className="control-button-layout">
              <div>
                <Tooltip content="单集详情">
                  <IconButton
                    variant="ghost"
                    radius="large"
                    className="control-button"
                  >
                    <IoMdInformationCircleOutline />
                  </IconButton>
                </Tooltip>

                <Tooltip content="向后15秒">
                  <IconButton
                    variant="ghost"
                    radius="large"
                    className="control-button"
                  >
                    <BsSkipBackwardFill />
                  </IconButton>
                </Tooltip>

                <Tooltip content="播放">
                  <IconButton
                    variant="ghost"
                    radius="large"
                    className="control-button"
                  >
                    <BsPlayFill />
                  </IconButton>
                </Tooltip>

                <Tooltip content="向前15秒">
                  <IconButton
                    variant="ghost"
                    radius="large"
                    className="control-button"
                  >
                    <BsSkipForwardFill />
                  </IconButton>
                </Tooltip>

                <Tooltip content="标记精彩时刻">
                  <IconButton
                    variant="ghost"
                    radius="large"
                    className="control-button"
                  >
                    <IoMdThumbsUp />
                  </IconButton>
                </Tooltip>
              </div>
            </div>

            <div className="progress-bar-layout">
              <div className="time-flag">
                <span>16:58</span>
                <span>1:41:11</span>
              </div>
              <div className="progress-bar">
                <Slider
                  size="1"
                  radius="none"
                  defaultValue={[30]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="player-right">right</div>
      </div>
    </div>
  )
}
