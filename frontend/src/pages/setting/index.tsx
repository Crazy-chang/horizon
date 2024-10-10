import { useEffect, useState } from 'react'
import { Environment } from 'wailsjs/runtime'
import { envType } from '@/types/env'
import { Box, Card, Flex, Separator, Switch } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { APP_NAME, APP_VERSION } from '@/utils'
import './index.modules.scss'

export const Setting = () => {
  const [envInfo, setEnvInfo] = useState<envType>()

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

      <h4>通用</h4>
      <Card>
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
        <Flex style={{ cursor: 'pointer' }}>
          <Box width="100%">关于</Box>
          <Box>
            <ChevronRightIcon />
          </Box>
        </Flex>
      </Card>

      <h4>隐私设置</h4>

      <div className="app-logo">
        <div className="logo">logo_placeholder</div>
      </div>

      <div className="app-info">
        <div>{APP_NAME}</div>
        <p>
          v{APP_VERSION}_{envInfo?.platform}_{envInfo?.arch}
        </p>
      </div>

      {/* <div className="app-logo">
        <div className="logo">logo_placeholder</div>
      </div>

      <h3>{APP_NAME}</h3>
      <p>
        v{APP_VERSION}_{envInfo?.platform}_{envInfo?.arch}
      </p>
      <p>
        <Button
          variant="soft"
          onClick={() => {
            checkUpdate()
          }}
        >
          检查更新...
        </Button>
      </p>
      <p>第三方小宇宙桌面客户端，支持 Windows / macOS</p>
      <p>
        接口服务：
        <Button
          size="2"
          variant="ghost"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            BrowserOpenURL('https://github.com/ultrazg/xyz')
          }}
        >
          xyz
        </Button>
      </p>

      <div className="buttons">
        <Flex
          gap="3"
          align="center"
        >
          <Button
            variant="ghost"
            onClick={() => {
              BrowserOpenURL('https://github.com/ultrazg/horizon')
            }}
          >
            Source Code (GitHub)
          </Button>
          <Separator orientation="vertical" />
          <Button
            variant="ghost"
            onClick={() => {
              BrowserOpenURL('https://opensource.org/license/mit')
            }}
          >
            MIT License
          </Button>
          <Separator orientation="vertical" />
          <Button
            variant="ghost"
            onClick={() => {
              BrowserOpenURL('https://github.com/ultrazg/horizon/issues')
            }}
          >
            Bug report & Issue
          </Button>
        </Flex>
      </div> */}
    </div>
  )
}
