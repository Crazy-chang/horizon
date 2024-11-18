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

export type { settingConfigType, userConfigType }
export { SETTING_CONFIG_ENUM }
