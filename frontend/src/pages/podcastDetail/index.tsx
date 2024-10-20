import React from 'react'
import { NavBackButton } from '@/components'
import { useLocation } from 'react-router-dom'
import { AspectRatio, Box, Flex, Heading, Text } from '@radix-ui/themes'
import './index.modules.scss'

export const PodcastDetail = () => {
  const { id } = useLocation().state

  return (
    <div className="podcast-detail-layout">
      <NavBackButton />

      <div className="podcast-detail-info">
        <div className="podcast-cover">
          <Box
            width="20rem"
            height="20rem"
          >
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
                alt="A house in a forest"
                style={{
                  objectFit: 'cover',
                  width: '20rem',
                  height: '20rem',
                  borderRadius: 'var(--radius-4)',
                }}
              />
            </AspectRatio>
          </Box>
        </div>
        <div className="podcast-detail">
          <Box
            mt="6"
            width="100%"
            height="100%"
          >
            <Heading
              size="8"
              align="center"
            >
              忽左忽右
            </Heading>
            <Text
              align="center"
              as="div"
              size="6"
            >
              “忽左忽右”是一档文化沙龙类播客节目，试图为中文播客听众提供基于经验视角的话题和内容。本节目由JustPod出品
            </Text>
          </Box>
        </div>
      </div>
    </div>
  )
}
