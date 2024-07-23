import React from 'react'
import { Box, Flex, ScrollArea, Text } from '@radix-ui/themes'
import './index.moduless.scss'

const Recommended = () => {
  return (
    <div className="recommended-layout">
      <h3>精选</h3>

      <div className="recommended-content">
        <ScrollArea
          size="1"
          type="hover"
          scrollbars="horizontal"
        >
          <Flex
            gap="4"
            width="700px"
          >
            <Box>
              <div className="recommended-item">1</div>
            </Box>
          </Flex>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Recommended
