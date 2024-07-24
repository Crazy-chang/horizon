import './index.modules.scss'
import { ColorfulShadow } from '@/components'
import { ChatBubbleIcon, PlayIcon } from '@radix-ui/react-icons'
import { Box, Flex, HoverCard, Text } from '@radix-ui/themes'

const mockData = [
  {
    id: 1,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: 'Vol.29 有声书 | 行李箱碎尸案背后的真相',
    podcast: '没药花园',
    description: '3 天前发布',
    comment_count: 7218,
    play_count: 72090,
    top_comment: {
      user_name: '_本华',
      comment_content:
        '我的天！我感觉春夏比好多咨询师都能承接住别人的感受！太棒了！这一刻，我觉得自己就像是一个人，我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人',
    },
  },
  {
    id: 2,
    episode_img:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'Vol.55 如何拯救自己的倾诉欲',
    podcast: '不把天聊si',
    description: '评论数 99+',
    comment_count: 3149,
    play_count: 14598,
    top_comment: {
      user_name: '_本华',
      comment_content:
        '我的天！我感觉春夏比好多咨询师都能承接住别人的感受！太棒了！这一刻，我觉得自己就像是一个人，我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人',
    },
  },
  {
    id: 3,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
    comment_count: 728,
    play_count: 4187,
    top_comment: {
      user_name: '_本华',
      comment_content:
        '我的天！我感觉春夏比好多咨询师都能承接住别人的感受！太棒了！这一刻，我觉得自己就像是一个人，我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人。我觉得自己就像是一个人',
    },
  },
]

const EditorRecommended = () => {
  return (
    <div className="editor-recommended-layout">
      <h3>编辑精选</h3>

      <div className="editor-recommended-content">
        {mockData.map((item: any) => {
          return (
            <div
              className="editor-recommended-item"
              key={item.id}
            >
              <div className="editor-recommended-info">
                <div className="cover-box">
                  <ColorfulShadow
                    src={item.episode_img}
                    mask
                    curPointer
                  />
                </div>
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <div className="info-box">
                      <p>{item.podcast}</p>
                      <p>{item.title}</p>
                      <p>
                        <span>
                          <PlayIcon />
                          {item.play_count}
                        </span>
                        <span>
                          <ChatBubbleIcon />
                          {item.comment_count}
                        </span>
                      </p>
                    </div>
                  </HoverCard.Trigger>
                  <HoverCard.Content
                    maxWidth="300px"
                    style={{
                      background: 'var(--black-a9)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                    }}
                  >
                    <Flex gap="1">
                      <Box>
                        <Text
                          as="div"
                          size="2"
                          color="gray"
                          mb="1"
                        >
                          @{item.top_comment.user_name}：
                        </Text>
                        <Text
                          as="div"
                          size="1"
                        >
                          {item.top_comment.comment_content}
                        </Text>
                      </Box>
                    </Flex>
                  </HoverCard.Content>
                </HoverCard.Root>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EditorRecommended
