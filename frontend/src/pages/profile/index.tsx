import React, { useState } from 'react'
import { Avatar, Flex, Separator, Card } from '@radix-ui/themes'
import { ColorfulShadow } from '@/components'
import {
  SlBubble,
  SlEarphones,
  SlSymbleFemale,
  SlSymbolMale,
} from 'react-icons/sl'
import { useNavigateTo } from '@/hooks'
import { FollowModal } from './components/followModal'
import { MileageDuration } from './components/mileageDuration'
import { Sticker } from './components/sticker'
import { Storage } from '@/utils'
import { userType } from '@/types/user'
import './index.modules.scss'

export const Profile: React.FC = () => {
  const [followModal, setFollowModal] = useState<{
    type: 'FOLLOWING' | 'FOLLOWER'
    open: boolean
  }>({
    type: 'FOLLOWING',
    open: false,
  })

  const userInfo: userType = Storage.get('user_info')

  const goMySubscribe = useNavigateTo('/subscription')

  const onFollowHandle = (type: 'FOLLOWING' | 'FOLLOWER') => {
    if (type === 'FOLLOWING') {
      setFollowModal({
        type: 'FOLLOWING',
        open: true,
      })
    } else {
      setFollowModal({
        type: 'FOLLOWER',
        open: true,
      })
    }
  }

  return (
    <div className="profile-layout">
      <div className="profile-content">
        <div className="profile-avatar">
          <Avatar
            size="9"
            src={userInfo.avatar}
            fallback={userInfo.nickname || 'avatar'}
            radius="full"
          />
        </div>
        <div className="profile-info">
          <div className="profile-nickname">
            {userInfo.nickname}
            <span className="gender">
              {userInfo.gender === 'MALE' ? (
                <SlSymbolMale
                  fontSize="18"
                  color="royalblue"
                />
              ) : null}
              {userInfo.gender === 'FEMALE' ? (
                <SlSymbleFemale
                  fontSize="18"
                  color="pink"
                />
              ) : null}
            </span>
          </div>
          <Separator
            my="1"
            size="4"
          />
          <div className="profile-follow">
            <Flex
              gap="3"
              align="center"
            >
              <div
                className="chunk"
                onClick={() => {
                  onFollowHandle('FOLLOWING')
                }}
              >
                <p>1</p>
                <p>关注</p>
              </div>
              <Separator
                className="separator"
                size="2"
                orientation="vertical"
              />
              <div
                className="chunk"
                onClick={() => {
                  onFollowHandle('FOLLOWER')
                }}
              >
                <p>0</p>
                <p>粉丝</p>
              </div>
              <Separator
                className="separator"
                size="2"
                orientation="vertical"
              />
              <div
                className="chunk"
                onClick={() => {
                  goMySubscribe()
                }}
              >
                <p>9</p>
                <p>订阅</p>
              </div>
            </Flex>
          </div>
          <div className="profile-bio">还没有设置签名</div>
          <div className="profile-ip">IP属地：{userInfo.ipLoc}</div>
        </div>
      </div>

      <MileageDuration />

      <Sticker />

      <div className="history-content">
        <h3>最近听过</h3>

        <div className="history-episode-item">
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

      <FollowModal
        type={followModal.type}
        open={followModal.open}
        onClose={() => {
          setFollowModal({
            type: 'FOLLOWING',
            open: false,
          })
        }}
      />
    </div>
  )
}
