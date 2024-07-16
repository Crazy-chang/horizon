import * as React from 'react'
import { Box, Button, Flex } from '@radix-ui/themes'
import './index.modules.scss'

export const PlayerButtons = () => {
  return (
    <div className="player-buttons-layout">
      <div className="buttons">
        <Flex gap="3">
          <Box width="25px">
            <Button
              size="1"
              variant="ghost"
            >
              1
            </Button>
          </Box>
          <Box width="25px">
            <Button
              size="1"
              variant="ghost"
            >
              2
            </Button>
          </Box>
        </Flex>
      </div>
    </div>
  )
}
