import { imageType } from '@/types/image'

type PodcasterType = {
  avatar: {
    picture: imageType
  }
  bio: string
  ipLoc: string
  isBlockedByViewer: boolean
  isCancelled: boolean
  isNicknameSet: boolean
  nickname: string
  readTrackInfo: any
  relation: string
  type: string
  uid: string
}

export type { PodcasterType }
