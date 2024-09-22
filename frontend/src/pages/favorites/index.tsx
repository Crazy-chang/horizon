import { Avatar, Box, Card, Separator, Tabs } from '@radix-ui/themes'
import './index.modules.scss'
import { ColorfulShadow } from '@/components'
import { SlBubble, SlEarphones, SlLike } from 'react-icons/sl'

export const Favorites = () => {
  return (
    <div className="favorites-layout">
      <h3>收藏</h3>

      <div className="favorites-content">
        <Tabs.Root defaultValue="1">
          <Tabs.List>
            <Tabs.Trigger value="1">单集</Tabs.Trigger>
            <Tabs.Trigger value="2">评论</Tabs.Trigger>
          </Tabs.List>

          <Box pt="3">
            <Tabs.Content value="1">
              <div className="favorites-episode-layout">
                <div className="favorites-episode-item">
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
                <div className="favorites-episode-item">
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
                <div className="favorites-episode-item">
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
                <div className="favorites-episode-item">
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
                <div className="favorites-episode-item">
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

            <Tabs.Content value="2">
              <Card className="favorites-comment-item">
                <div className="top">
                  <div className="comment-avatar">
                    <Avatar
                      size="3"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      radius="full"
                      fallback="T"
                    />
                  </div>
                  <div className="comment-info">
                    <p>谷谷鸟鸟</p>
                    <p>09/12 上海</p>
                    <p>你就是干这个的！</p>
                  </div>
                  <div className="comment-like">
                    <SlLike />
                    389
                  </div>
                </div>

                <Separator
                  my="3"
                  size="4"
                />

                <div className="bottom"></div>
              </Card>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  )
}
