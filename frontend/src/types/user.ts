type userType = {
  uid?: string
  avatar?: string
  nickname?: string
  gender?: string
  industry?: string
  mobilePhoneNumber?: string
  ipLoc?: string
  wechatUserInfo?: wechatUserInfoType
  jikeUserInfo?: jikeUserInfoType
}

type wechatUserInfoType = {
  nickName?: string
}

type jikeUserInfoType = {
  nickname?: string
}

export type { userType }
