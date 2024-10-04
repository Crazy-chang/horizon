import { useRef } from 'react'
import { Avatar, Flex, Separator } from '@radix-ui/themes'
import './index.modules.scss'

export const Profile = () => {
  // const elementRef = useRef(null)

  return (
    <div className="profile-layout">
      <div className="profile-content">
        <div className="profile-avatar">
          <Avatar
            size="9"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
        </div>
        <div className="profile-info">
          <div className="profile-nickname">hexdream</div>
          <Separator
            my="3"
            size="4"
          />
          <div className="profile-follow">
            <Flex
              gap="3"
              align="center"
            >
              <div className="chunk">
                <p>1</p>
                <p>关注</p>
              </div>
              <Separator
                className="spearator"
                size="2"
                orientation="vertical"
              />
              <div className="chunk">
                <p>0</p>
                <p>粉丝</p>
              </div>
              <Separator
                className="spearator"
                size="2"
                orientation="vertical"
              />
              <div className="chunk">
                <p>9</p>
                <p>订阅</p>
              </div>
            </Flex>
          </div>
          <div className="profile-bio">还没有设置签名</div>
        </div>
      </div>
    </div>
  )
}

// if (elementRef.current) {
//   const { width, height } = elementRef.current.getBoundingClientRect()
//   console.log('bound', width, height)
// }
