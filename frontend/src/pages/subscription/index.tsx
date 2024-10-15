import './index.modules.scss'
import { AspectRatio, Box, Card, Grid, Text } from '@radix-ui/themes'

export const Subscription = () => {
  return (
    <div className="subscription-layout">
      <h3>我的订阅</h3>

      <Grid
        columns="4"
        gap="6"
        width="auto"
      >
        <Box>
          <Card className="podcast-cover">
            <AspectRatio ratio={8 / 8}>
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                className="podcast-img"
              />
            </AspectRatio>

            <Text
              mt="3"
              className="podcast-title"
              as="p"
              size="4"
            >
              Web Worker - 前端程序员都爱听
            </Text>
            <Text
              className="podcast-update-time"
              as="p"
              size="2"
            >
              更新于09/05
            </Text>
          </Card>
        </Box>
      </Grid>
    </div>
  )
}
