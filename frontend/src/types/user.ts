type userType = {
  uid?: string
  avatar?: string
  nickname?: string
  gender?: string
  industry?: string
  mobilePhoneNumber?: string
  ipLoc?: string
  XJikeAccessToken?: string
  XJikeRefreshToken?: string
  wechatUserInfo?: wechatUserInfoType
  jikeUserInfo?: jikeUserInfoType
}

type wechatUserInfoType = {
  nickname?: string
}

type jikeUserInfoType = {
  nickname?: string
}

export type { userType }
