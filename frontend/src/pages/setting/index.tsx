import { useEffect, useState } from 'react'
import { Environment } from 'wailsjs/runtime'
import { envType } from '@/types/env'
import { Box, Card, Flex, Separator, Switch, Button } from '@radix-ui/themes'
import { ChevronRightIcon, ExitIcon } from '@radix-ui/react-icons'
import { APP_NAME, APP_VERSION } from '@/utils'
import { useNavigateTo } from '@/hooks'
import './index.modules.scss'

export const Setting = () => {
  const [envInfo, setEnvInfo] = useState<envType>()

  const goAbout = useNavigateTo('/about')

  const checkUpdate = () => {
    // TODO:  check update
  }

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <div className="setting-layout">
      <h3>设置</h3>

      <h4>账号绑定</h4>
      <Card>
        <Flex>
          <Box width="100%">手机号</Box>
          <Box className="content_text">13111111111</Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">微信</Box>
          <Box className="content_text">WECHAT_NAME</Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">即刻</Box>
          <Box className="content_text">JIKE_NAME</Box>
        </Flex>
      </Card>

      <h4>隐私设置</h4>
      <Card>
        <Flex>
          <Box width="100%">不让他人看到我的收听记录</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">不在评论区展示收听时长标签</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">不让他人看到我的贴纸库</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">不让他人看到我的贴纸装扮</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">接受热门内容推送</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">个性化推荐</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
      </Card>

      <h4>其他</h4>
      <Card>
        <Flex>
          <Box width="100%">更新</Box>
          <Box>
            <Button
              size={'1'}
              variant={'soft'}
              style={{ width: '100px' }}
              onClick={checkUpdate}
            >
              检查更新...
            </Button>
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">启动时检查更新</Box>
          <Box>
            <Switch />
          </Box>
        </Flex>
        <Separator
          my="3"
          size="4"
        />
        <Flex
          style={{ cursor: 'pointer' }}
          onClick={goAbout}
        >
          <Box width="100%">关于</Box>
          <Box>
            <ChevronRightIcon />
          </Box>
        </Flex>
      </Card>

      <h4>账户</h4>
      <Card>
        <Flex>
          <Box width="100%">登出</Box>
          <Box>
            <Button
              size={'1'}
              variant="soft"
              style={{ width: '100px' }}
              onClick={checkUpdate}
              color="red"
            >
              <ExitIcon /> 退出登录
            </Button>
          </Box>
        </Flex>
      </Card>

      <div className="app-logo">
        <div className="logo">logo_placeholder</div>
      </div>

      <div className="app-info">
        <div>{APP_NAME}</div>
        <p>
          v{APP_VERSION}_{envInfo?.platform}_{envInfo?.arch}
        </p>
      </div>
    </div>
  )
}
