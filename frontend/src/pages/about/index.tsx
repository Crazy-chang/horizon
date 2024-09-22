import { useEffect, useState } from 'react'
import { Version } from 'wailsjs/go/bridge/App'
import { Environment, BrowserOpenURL } from 'wailsjs/runtime'
import { envType } from '@/types/env'
import { Button, Flex, Separator } from '@radix-ui/themes'
import './index.modules.scss'

export const About = () => {
  const [version, setVersion] = useState<string>()
  const [envInfo, setEnvInfo] = useState<envType>()

  const checkUpdate = () => {
    // TODO:  check update
  }

  useEffect(() => {
    Version().then((res: string) => {
      setVersion(res)
    })

    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <div className="about-layout">
      <div className="about-logo">
        <div className="logo">logo_placeholder</div>
      </div>

      <h3>horizon</h3>
      <p>
        v{version}_{envInfo?.platform}_{envInfo?.arch}
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
      </div>
    </div>
  )
}
