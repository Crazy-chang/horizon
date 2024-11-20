import httpRequest from './request'
import { isValidPhoneNumber } from './regex'
import { APP_NAME, APP_VERSION } from './appInfo'
import { toast } from './toast'
import Storage from '@/utils/storage'

export {
  httpRequest,
  isValidPhoneNumber,
  APP_NAME,
  APP_VERSION,
  toast,
  Storage,
}
