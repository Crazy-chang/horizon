import './index.modules.scss'
import {
  Box,
  Button,
  Tabs,
  TextField,
  Text,
  ScrollArea,
} from '@radix-ui/themes'
import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { ColorfulShadow } from '@/components'

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
              <ScrollArea scrollbars="vertical">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
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
                        <Button variant="outline">
                          <PlusIcon />
                          订阅
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tabs.Content>

                <Tabs.Content value="2">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>

                <Tabs.Content value="3">
                  <Text size="2">
                    Edit your profile or update contact information.
                  </Text>
                </Tabs.Content>
              </ScrollArea>
            </Box>
          </Tabs.Root>
        </div>
      </div>
    </div>
  )
}
