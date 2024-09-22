import './index.modules.scss'
import { Card, Inset, Text } from '@radix-ui/themes'

export const Subscription = () => {
  return (
    <div className="subscription-layout">
      <h3>我的订阅</h3>

      <div className="subscription-content">
        <div className="subscription-item">
          <Card className="podcast-cover">
            <Inset
              clip="padding-box"
              side="top"
              pb="current"
            >
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 200,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text
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
        </div>
      </div>
    </div>
  )
}
