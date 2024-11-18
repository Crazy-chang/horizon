type settingConfigType = {
  checkUpdateOnStartup: boolean
  isIpLocHidden: boolean
}

type userConfigType = {
  accessToken: string
  refreshToken: string
}

const SETTING_CONFIG_ENUM = {
  checkUpdateOnStartup: 'setting.checkUpdateOnStartup',
  isIpLocHidden: 'setting.isIpLocHidden',
}

export type { settingConfigType, userConfigType }
export { SETTING_CONFIG_ENUM }
