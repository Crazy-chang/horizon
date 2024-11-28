import { Box, Flex, ScrollArea } from '@radix-ui/themes'
import './index.moduless.scss'
import { ColorfulShadow } from '@/components'
import { useNavigate } from 'react-router-dom'

const mockData = [
  {
    id: 1,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: 'Vol.29 有声书 | 行李箱碎尸案背后的真相',
    podcast: '没药花园',
    description: '3 天前发布',
  },
  {
    id: 2,
    episode_img:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'Vol.55 如何拯救自己的倾诉欲',
    podcast: '不把天聊si',
    description: '评论数 99+',
  },
  {
    id: 3,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 4,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 5,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 6,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 7,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 8,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
  {
    id: 9,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
]

const Recommended = () => {
  const navigateTo = useNavigate()
  const goPodcastDetail = (id: string) => {
    navigateTo('/podcast/detail', {
      state: {
        id,
      },
    })
  }

  return (
    <div className="recommended-layout">
      <h3>精选节目</h3>

      <div className="recommended-content">
        <ScrollArea
          size="2"
          type="hover"
          scrollbars="horizontal"
        >
          <Flex
            gap="1"
            width="700px"
          >
            {mockData.map((item: any) => (
              <Box key={item.id}>
                <div className="recommended-item">
                  <div className="cover-box">
                    <ColorfulShadow
                      className="cover"
                      src={item.episode_img}
                      curPointer
                      onClick={() => {
                        goPodcastDetail(item.id)
                      }}
                    />
                  </div>

                  <div className="podcast-info">
                    <div className="podcast-title">{item.podcast}</div>
                  </div>
                </div>
              </Box>
            ))}
          </Flex>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Recommended
