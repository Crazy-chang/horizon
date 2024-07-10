import { useEffect, useState } from 'react'
import { ShowVersion } from '../../../wailsjs/go/utils/AppInfo'
import { Environment, BrowserOpenURL } from '../../../wailsjs/runtime'
import { envType } from '@/types/env'
import { VscGithubInverted } from 'react-icons/vsc'
import { Button, Tooltip } from '@radix-ui/themes'
import './index.modules.scss'

export const About = () => {
  const [version, setVersion] = useState<string>()
  const [envInfo, setEnvInfo] = useState<envType>()

  useEffect(() => {
    ShowVersion().then((res: string) => {
      setVersion(res)
    })

    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <div className="about-layout">
      <div className="about-logo">
        <div className="logo">logo</div>
      </div>

      <h3>horizon</h3>
      <p>
        v{version}_{envInfo?.platform}_{envInfo?.arch}
      </p>
      <p>第三方小宇宙桌面客户端，支持 Windows / macOS</p>

      <div className="buttons">
        <Tooltip content="GitHub">
          <Button
            color="gray"
            variant="ghost"
            size="4"
            onClick={() => {
              BrowserOpenURL('https://github.com/ultrazg/horizon')
            }}
          >
            <VscGithubInverted />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
