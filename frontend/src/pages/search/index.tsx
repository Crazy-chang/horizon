import { Box, Button, Tabs, TextField, Avatar } from '@radix-ui/themes'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { SlEarphones, SlBubble } from 'react-icons/sl'
import { ColorfulShadow } from '@/components'
import './index.modules.scss'

export const Search = () => {
  return (
    <div className="search-layout">
      <h3>搜索</h3>

      <div className="search-content">
        <div className="search-input">
          <div className="left">
            <TextField.Root
              size="3"
              placeholder="输入关键字"
            >
              <TextField.Slot>
                <MagnifyingGlassIcon
                  height="16"
                  width="16"
                />
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div className="right">
            <Button size="3">搜索</Button>
          </div>
        </div>

        <div className="search-result">
          <Tabs.Root defaultValue="1">
            <Tabs.List size="2">
              <Tabs.Trigger value="1">节目</Tabs.Trigger>
              <Tabs.Trigger value="2">单集</Tabs.Trigger>
              <Tabs.Trigger value="3">用户</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="1">
                <div className="search-result-podcast-layout">
                  <div className="search-result-podcast-item">
                    <div className="left">
                      <ColorfulShadow
                        className="podcast-cover"
                        curPointer
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      />

                      <div className="podcast-info">
                        <p>刘小米的深夜FM</p>
                        <p>
                          我住在北方，难得这些天许多雨水，夜晚听见窗外的雨声，让我响起了南方，想起从前待在南方，许多那里的气息，许多那里的颜色，不知觉心已经轻轻飞起，我第一次恋爱在那里，不知她现在怎么样
                        </p>
                        <p>刘小米 · 07/29更新</p>
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        variant="soft"
                        color="gray"
                      >
                        <PlusIcon />
                        订阅
                      </Button>
                    </div>
                  </div>

                  <div className="search-result-podcast-item">
                    <div className="left">
                      <ColorfulShadow
                        className="podcast-cover"
                        curPointer
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      />

                      <div className="podcast-info">
                        <p>刘小米的深夜FM</p>
                        <p>
                          我住在北方，难得这些天许多雨水，夜晚听见窗外的雨声，让我响起了南方，想起从前待在南方，许多那里的气息，许多那里的颜色，不知觉心已经轻轻飞起，我第一次恋爱在那里，不知她现在怎么样
                        </p>
                        <p>刘小米 · 07/29更新</p>
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        variant="soft"
                        color="gray"
                      >
                        <PlusIcon />
                        订阅
                      </Button>
                    </div>
                  </div>

                  <div className="search-result-podcast-item">
                    <div className="left">
                      <ColorfulShadow
                        className="podcast-cover"
                        curPointer
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      />

                      <div className="podcast-info">
                        <p>刘小米的深夜FM</p>
                        <p>
                          我住在北方，难得这些天许多雨水，夜晚听见窗外的雨声，让我响起了南方，想起从前待在南方，许多那里的气息，许多那里的颜色，不知觉心已经轻轻飞起，我第一次恋爱在那里，不知她现在怎么样
                        </p>
                        <p>刘小米 · 07/29更新</p>
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        variant="soft"
                        color="gray"
                      >
                        <PlusIcon />
                        订阅
                      </Button>
                    </div>
                  </div>

                  <div className="search-result-podcast-item">
                    <div className="left">
                      <ColorfulShadow
                        className="podcast-cover"
                        curPointer
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      />

                      <div className="podcast-info">
                        <p>刘小米的深夜FM</p>
                        <p>
                          我住在北方，难得这些天许多雨水，夜晚听见窗外的雨声，让我响起了南方，想起从前待在南方，许多那里的气息，许多那里的颜色，不知觉心已经轻轻飞起，我第一次恋爱在那里，不知她现在怎么样
                        </p>
                        <p>刘小米 · 07/29更新</p>
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        variant="soft"
                        color="gray"
                      >
                        <PlusIcon />
                        订阅
                      </Button>
                    </div>
                  </div>

                  <div className="search-result-podcast-item">
                    <div className="left">
                      <ColorfulShadow
                        className="podcast-cover"
                        curPointer
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      />

                      <div className="podcast-info">
                        <p>刘小米的深夜FM</p>
                        <p>
                          我住在北方，难得这些天许多雨水，夜晚听见窗外的雨声，让我响起了南方，想起从前待在南方，许多那里的气息，许多那里的颜色，不知觉心已经轻轻飞起，我第一次恋爱在那里，不知她现在怎么样
                        </p>
                        <p>刘小米 · 07/29更新</p>
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        variant="soft"
                        color="gray"
                      >
                        <PlusIcon />
                        订阅
                      </Button>
                    </div>
                  </div>
                </div>
              </Tabs.Content>

              <Tabs.Content value="2">
                <div className="search-result-episode-layout">
                  <div className="search-result-episode-item">
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
                  <div className="search-result-episode-item">
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
                  <div className="search-result-episode-item">
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
                  <div className="search-result-episode-item">
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
                  <div className="search-result-episode-item">
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
                  <div className="search-result-episode-item">
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
              </Tabs.Content>

              <Tabs.Content value="3">
                <div className="search-result-user-layout">
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                  <div className="search-result-user-item">
                    <div className="user-avatar">
                      <Avatar
                        className="avatar-box"
                        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                        fallback="A"
                      />
                    </div>
                    <div className="user-info">小米</div>
                  </div>
                </div>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </div>
      </div>
    </div>
  )
}
