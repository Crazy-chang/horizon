type userType = {
  uid: string
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

type userStats = {
  followerCount: number
  followingCount: number
  subscriptionCount: number
  totalPlayedSeconds: number
}

export type { userType, userStats }
