type settingConfigType = {
  checkUpdateOnStartup: boolean
  isIpLocHidden: boolean
}

type userConfigType = {
  access_token: string
  refresh_token: string
}

const SETTING_CONFIG_ENUM = {
  checkUpdateOnStartup: 'setting.check_update_on_startup',
  isIpLocHidden: 'setting.is_ip_loc_hidden',
}

const USER_CONFIG_ENUM = {
  accessToken: 'user.access_token',
  refreshToken: 'user.refresh_token',
}

export type { settingConfigType, userConfigType }
export { SETTING_CONFIG_ENUM, USER_CONFIG_ENUM }
