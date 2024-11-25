import React, { useEffect, useState } from 'react'
import { Avatar, Flex, Separator } from '@radix-ui/themes'
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
import { userType, userStats } from '@/types/user'
import { getUserStats } from '@/api/user'
import { playedList } from '@/api/played'
import dayjs from 'dayjs'
import './index.modules.scss'

export const Profile: React.FC = () => {
  const [followModal, setFollowModal] = useState<{
    type: 'FOLLOWING' | 'FOLLOWER'
    open: boolean
  }>({
    type: 'FOLLOWING',
    open: false,
  })
  const [stats, setStats] = useState<userStats>({
    followerCount: 0,
    followingCount: 0,
    subscriptionCount: 0,
    totalPlayedSeconds: 0,
  })
  const [playedLists, setPlayedLists] = useState<any>([])

  const userInfo: userType = Storage.get('user_info')

  const goMySubscribe = useNavigateTo('/subscription')

  const onFollowHandle = (type: 'FOLLOWING' | 'FOLLOWER') => {
    setFollowModal({
      type,
      open: true,
    })
  }

  /**
   * 获取用户统计数据
   */
  const onGetUserStats = () => {
    const params = {
      uid: userInfo.uid,
    }

    getUserStats(params)
      .then((res) => setStats(res.data.data))
      .catch((err) => {
        console.error(err)
      })
  }

  /**
   * 获取最近听过列表
   */
  const onGetPlayedList = () => {
    const params = {
      uid: userInfo.uid,
    }

    playedList(params)
      .then((res) => setPlayedLists(res.data.data))
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    onGetUserStats()
    onGetPlayedList()
  }, [])

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
                <p>{stats.followingCount}</p>
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
                <p>{stats.followerCount}</p>
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
                <p>{stats.subscriptionCount}</p>
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

        {playedLists.map((item: any) => (
          <div
            className="history-episode-item"
            key={item.eid}
          >
            <div className="left">
              <ColorfulShadow
                className="episode-cover"
                curPointer
                mask
                src={item.image.picUrl}
              />
            </div>
            <div className="right">
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>
                <span>
                  {Math.floor(item.duration / 60)}分钟 ·{' '}
                  {dayjs(item.pubDate).format('MM/DD')}
                </span>
                <span>
                  <SlEarphones />
                  {item.playCount}
                  <SlBubble />
                  {item.commentCount}
                </span>
              </p>
            </div>
          </div>
        ))}
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
