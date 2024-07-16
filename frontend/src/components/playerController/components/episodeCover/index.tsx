import React, { useState } from 'react'
import {
  CaretUpIcon,
  PlayIcon,
  PauseIcon,
  HeartIcon,
  HeartFilledIcon,
} from '@radix-ui/react-icons'
import './index.modules.scss'
import { Button, Flex, Box } from '@radix-ui/themes'

interface IProps {
  onOpen: () => void
}

export const EpisodeCover: React.FC<IProps> = (props) => {
  const [isPlay, setIsPlay] = useState<boolean>(false)

  return (
    <>
      <div className="episode-cover-layout">
        <div className="episode-cover">
          <img
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="episode-cover"
            draggable={false}
          />
          <div
            className="mask"
            onClick={() => {
              props.onOpen()
            }}
          >
            <CaretUpIcon style={{ width: 50, height: 50 }} />
          </div>
        </div>
        <div className="episode-info">
          <div className="episode-title">
            <h4>Episode Title</h4>
          </div>
          <div className="controller-button-layout">
            <Flex gap="3">
              <Box width="25px">
                <Button
                  size="1"
                  variant="ghost"
                  onClick={() => {
                    setIsPlay(!isPlay)
                  }}
                >
                  {isPlay ? <PauseIcon /> : <PlayIcon />}
                </Button>
              </Box>
              <Box width="25px">
                <Button
                  size="1"
                  variant="ghost"
                  onClick={() => {
                    setIsPlay(!isPlay)
                  }}
                >
                  {isPlay ? (
                    <HeartIcon />
                  ) : (
                    <HeartFilledIcon style={{ color: '#E5484D' }} />
                  )}
                </Button>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </>
  )
}
