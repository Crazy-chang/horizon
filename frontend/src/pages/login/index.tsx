import React from 'react'
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
import './index.modules.scss'
import '@/assets/global/animate.css'
import APP_ICON from '@/assets/images/logo.png'

export const Login = () => {
  const [animate, setAnimate] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)

  const goHome = useNavigateTo('/')

  const onLogin = () => {
    setLoading(true)

    setTimeout(() => {
      goHome()
      setLoading(false)
    }, 3000)
  }

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
                  />
                </Box>

                <Box width="40%">
                  <Button
                    size="3"
                    style={{ width: '100%' }}
                    variant="outline"
                    onClick={() => {
                      setAnimate(true)
                      setTimeout(() => {
                        setAnimate(false)
                      }, 500)
                    }}
                  >
                    发送验证码
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
