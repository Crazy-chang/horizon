import React, { useEffect, useState } from 'react'
import { Environment } from 'wailsjs/runtime'
import { ReadConfig, UpdateConfig } from 'wailsjs/go/bridge/App'
import { envType } from '@/types/env'
import {
  settingConfigType,
  SETTING_CONFIG_ENUM,
  USER_CONFIG_ENUM,
} from '@/types/config'
import {
  Box,
  Card,
  Flex,
  Separator,
  Switch,
  Button,
  Tooltip,
} from '@radix-ui/themes'
import {
  ChevronRightIcon,
  ExitIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons'
import { APP_NAME, APP_VERSION } from '@/utils'
import { ping } from '@/api/ping'
import { useNavigateTo } from '@/hooks'
import APP_ICON from '@/assets/images/logo.png'
import { userType } from '@/types/user'
import { Storage } from '@/utils'
import './index.modules.scss'

export const Setting: React.FC = () => {
  const [envInfo, setEnvInfo] = useState<envType>()
  const [config, setConfig] = useState<settingConfigType>({
    checkUpdateOnStartup: false,
    isIpLocHidden: false,
  })
  const userInfo: userType = Storage.get('user_info')

  const goAbout = useNavigateTo('/about')

  const checkUpdate = () => {
    // TODO:  check update
    ping()
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        console.error('error', err)
      })
  }

  const onUpdateConfig = (key: string, value: any) => {
    UpdateConfig(key, value).then()
  }

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })

    ReadConfig()
      .then((res) => {
        setConfig(res.setting)
      })
      .catch((err) => {
        console.error('error', err)
      })
  }, [])

  return (
    <div className="setting-layout">
      <h3>设置</h3>

      <h4>账号绑定</h4>
      <Card>
        <Flex>
          <Box width="100%">手机号</Box>
          <Box className="content_text">{userInfo.mobilePhoneNumber}</Box>
        </Flex>
        {userInfo.wechatUserInfo?.nickName && (
          <>
            <Separator
              my="3"
              size="4"
            />
            <Flex>
              <Box width="100%">微信</Box>
              <Box className="content_text">
                {userInfo.wechatUserInfo?.nickName}
              </Box>
            </Flex>
          </>
        )}

        {userInfo.jikeUserInfo?.nickname && (
          <>
            <Separator
              my="3"
              size="4"
            />
            <Flex>
              <Box width="100%">即刻</Box>
              <Box className="content_text">
                {userInfo.jikeUserInfo?.nickname}
              </Box>
            </Flex>
          </>
        )}
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
        <Separator
          my="3"
          size="4"
        />
        <Flex>
          <Box width="100%">
            不展示 IP 属地信息
            <Tooltip content="关闭后将不显示自己与他人的 IP 属地信息">
              <QuestionMarkCircledIcon
                style={{
                  marginLeft: '6px',
                  cursor: 'help',
                }}
              />
            </Tooltip>
          </Box>
          <Box>
            <Switch
              checked={config?.isIpLocHidden}
              onCheckedChange={(checked: boolean) => {
                setConfig({
                  ...config,
                  isIpLocHidden: checked,
                })
                onUpdateConfig(SETTING_CONFIG_ENUM.isIpLocHidden, checked)
              }}
            />
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
            <Switch
              checked={config?.checkUpdateOnStartup}
              onCheckedChange={(checked: boolean) => {
                setConfig({
                  ...config,
                  checkUpdateOnStartup: checked,
                })
                onUpdateConfig(
                  SETTING_CONFIG_ENUM.checkUpdateOnStartup,
                  checked,
                )
              }}
            />
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
              onClick={() => {
                UpdateConfig(USER_CONFIG_ENUM.accessToken, '').then()
                UpdateConfig(USER_CONFIG_ENUM.refreshToken, '').then()
              }}
              color="red"
            >
              <ExitIcon /> 退出登录
            </Button>
          </Box>
        </Flex>
      </Card>

      <div className="app-logo">
        <div className="logo">
          <img
            src={APP_ICON}
            alt="app_icon"
          />
        </div>
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
