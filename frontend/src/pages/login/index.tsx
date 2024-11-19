import React, { useState, useEffect } from 'react'
import { useNavigateTo } from '@/hooks'
import {
  Button,
  Container,
  Section,
  TextField,
  Text,
  Tooltip,
  Flex,
  Box,
} from '@radix-ui/themes'
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import APP_ICON from '@/assets/images/logo.png'
import { UpdateConfig } from 'wailsjs/go/bridge/App'
import { USER_CONFIG_ENUM } from '@/types/config'
import { sendCode, login } from '@/api/login'
import '@/assets/global/animate.css'
import './index.modules.scss'
import { isValidPhoneNumber } from '@/utils'

export const Login: React.FC = () => {
  const [animate, setAnimate] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const [isCounting, setIsCounting] = useState<boolean>(false)
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState<string>('')
  const [verifyCode, setVerifyCode] = useState<string>('')

  const goHome = useNavigateTo('/')

  const onStartCountdown = (): void => {
    if (!isCounting) {
      setTimer(60)
      setIsCounting(true)
    }
  }

  const onLogin = () => {
    const params = {
      mobilePhoneNumber,
      verifyCode,
    }

    login(params)
      .then((res) => {
        console.log(res.msg)
      })
      .catch((err) => {
        console.error('error', err)
      })
    // setLoading(true)
    //
    // UpdateConfig(USER_CONFIG_ENUM.accessToken, 'access_token').then()
    // UpdateConfig(USER_CONFIG_ENUM.refreshToken, 'refresh_token').then()
    //
    // setTimeout(() => {
    //   goHome()
    //   setLoading(false)
    // }, 3000)
  }

  const onSendCode = () => {
    if (
      mobilePhoneNumber.length === 11 &&
      isValidPhoneNumber(mobilePhoneNumber)
    ) {
      onStartCountdown()
      // sendCode({ mobilePhoneNumber }).then(() => {
      //   // ...
      // })
    } else {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 500)
    }
  }

  useEffect(() => {
    let interval: any
    if (isCounting && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsCounting(false)
    }
    return () => clearInterval(interval)
  }, [isCounting, timer])

  return (
    <>
      <Container size="1">
        <Section size="3">
          <div className="logo-layout">
            <div className="logo">
              <img
                src={APP_ICON}
                alt="APP_ICON"
              />
            </div>
          </div>

          <div className="form-layout">
            <div className="form">
              <Text style={{ display: 'flex', alignItems: 'center' }}>
                手机验证登录
                <Tooltip content="使用小宇宙 APP 绑定的手机号登录">
                  <QuestionMarkCircledIcon style={{ marginLeft: 4 }} />
                </Tooltip>
              </Text>

              <TextField.Root
                className={animate ? 'shakeX' : ''}
                id="phone"
                placeholder="请输入"
                size="3"
                style={{ marginTop: 12, marginBottom: 12 }}
                maxLength={11}
                type="tel"
                value={mobilePhoneNumber}
                onChange={(e) => {
                  setMobilePhoneNumber(e.target.value)
                }}
              >
                <TextField.Slot>+86</TextField.Slot>
              </TextField.Root>

              <Flex gap="3">
                <Box width="60%">
                  <TextField.Root
                    placeholder="短信验证码"
                    size="3"
                    style={{ marginBottom: 12 }}
                    maxLength={4}
                    value={verifyCode}
                    onChange={(e) => {
                      setVerifyCode(e.target.value)
                    }}
                  />
                </Box>

                <Box width="40%">
                  <Button
                    size="3"
                    style={{ width: '100%' }}
                    variant="outline"
                    onClick={onSendCode}
                    disabled={isCounting}
                  >
                    {isCounting ? `${timer}s` : '发送验证码'}
                  </Button>
                </Box>
              </Flex>

              <Button
                size="3"
                style={{ width: '100%' }}
                loading={loading}
                onClick={() => {
                  onLogin()
                }}
              >
                登录
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </>
  )
}
