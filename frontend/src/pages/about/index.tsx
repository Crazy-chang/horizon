import { useEffect, useState } from 'react'
import { Version } from 'wailsjs/go/bridge/App'
import { Environment, BrowserOpenURL } from 'wailsjs/runtime'
import { envType } from '@/types/env'
import { Button, Link, Tooltip } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const About = () => {
  const [version, setVersion] = useState<string>()
  const [envInfo, setEnvInfo] = useState<envType>()

  const checkUpdate = () => {}

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
        <Button variant="soft">检查更新</Button>
      </p>
      <p>第三方小宇宙桌面客户端，支持 Windows / macOS</p>
      <p>
        接口服务：
        <Link
          style={{ cursor: 'pointer' }}
          onClick={() => {
            BrowserOpenURL('https://github.com/ultrazg/xyz')
          }}
        >
          xyz
        </Link>
      </p>

      <div className="buttons">
        <Tooltip content="GitHub">
          <Button
            color="gray"
            variant="ghost"
            size="3"
            onClick={() => {
              BrowserOpenURL('https://github.com/ultrazg/horizon')
            }}
          >
            <GitHubLogoIcon style={{ width: 25, height: 25 }} />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
