import React from 'react'
import { NavBackButton } from '@/components'
import './index.modules.scss'
import { useLocation } from 'react-router-dom'
import { Box, Flex } from '@radix-ui/themes'

export const PodcastDetail = () => {
  const { id } = useLocation().state

  return (
    <div className="podcast-detail-layout">
      <NavBackButton />

      <div>
        <Flex gap="3">
          <Box
            width="64px"
            height="64px"
          >
            left
          </Box>
          <Box
            width="64px"
            height="64px"
          >
            right
          </Box>
        </Flex>
      </div>
    </div>
  )
}
