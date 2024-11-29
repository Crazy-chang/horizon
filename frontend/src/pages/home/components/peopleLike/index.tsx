import { Box, Card, Flex, ScrollArea, Avatar } from '@radix-ui/themes'
import { HeartFilledIcon, PlayIcon } from '@radix-ui/react-icons'
import './index.modules.scss'
import { ColorfulShadow } from '@/components'

const mockData = [
  {
    id: 1,
    avatar_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    nickname: 'CwCing',
    time: '07/09',
    like_count: 19,
    comment:
      '不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅',
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    episode_title: '055-中式旧核：透过回忆的钥匙，窥视我们的赛博避难所',
    podcast: '大兔公园',
  },
  {
    id: 2,
    avatar_img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    nickname: '别让我摘耳机',
    time: '07/09',
    like_count: 932,
    comment:
      '不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅',
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    episode_title: '055-中式旧核：透过回忆的钥匙，窥视我们的赛博避难所',
    podcast: '大兔公园',
  },
  {
    id: 3,
    avatar_img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    nickname: '小蓝',
    time: '07/09',
    like_count: 91,
    comment:
      '不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅',
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    episode_title: '055-中式旧核：透过回忆的钥匙，窥视我们的赛博避难所',
    podcast: '大兔公园',
  },
  {
    id: 4,
    avatar_img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    nickname: '小紫',
    time: '07/09',
    like_count: 9421,
    comment:
      '不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅',
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    episode_title: '055-中式旧核：透过回忆的钥匙，窥视我们的赛博避难所',
    podcast: '大兔公园',
  },
  {
    id: 5,
    avatar_img: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
    nickname: '梨没事吧',
    time: '07/09',
    like_count: 8964,
    comment:
      '不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅不知道为什么，有一种意识窜梭回到小学的失真感，仿佛可以看见三年级窗边绚烂的花、那些tape和cd机、还有那木制的桌椅',
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    episode_title: '055-中式旧核：透过回忆的钥匙，窥视我们的赛博避难所',
    podcast: '大兔公园',
  },
]

const PeopleLike = () => {
  return (
    <div className="people-like-layout">
      <h3>TA们的喜欢</h3>

      <div className="people-like-content">
        <ScrollArea
          size="2"
          type="hover"
          scrollbars="horizontal"
        >
          <Flex
            gap="3"
            width="700px"
          >
            {/* <div className="card-items"> */}
            {mockData.map((item: any) => (
              <Box key={item.id}>
                <Card className="card">
                  <div className="user-info">
                    <div className="l">
                      <Avatar
                        radius="full"
                        size="4"
                        fallback
                        src={item.avatar_img}
                      />
                    </div>
                    <div className="m">
                      <p>{item.nickname}</p>
                      <p>{item.time}</p>
                    </div>
                    <div className="r">
                      <HeartFilledIcon />
                      {item.like_count}
                    </div>
                  </div>

                  <div className="comment">{item.comment}</div>

                  <div className="episode_info">
                    <div className="l">
                      <ColorfulShadow
                        className="episode_cover"
                        src={item.episode_img}
                      />
                    </div>
                    <div className="m">
                      <p>{item.episode_title}</p>
                      <p>{item.podcast}</p>
                    </div>
                    <div className="r">
                      <div className="play_button">
                        <PlayIcon />
                      </div>
                    </div>
                  </div>
                </Card>
              </Box>
            ))}
            {/* </div> */}
          </Flex>
        </ScrollArea>
      </div>
    </div>
  )
}

export default PeopleLike
