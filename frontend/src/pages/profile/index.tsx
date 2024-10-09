import { useState } from 'react'
import {
  Avatar,
  Flex,
  Separator,
  Card,
  Dialog,
  TextField,
  Button,
  Text,
} from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import './index.modules.scss'
import { ColorfulShadow } from '@/components'
import {
  SlBubble,
  SlEarphones,
  SlSymbleFemale,
  SlSymbolMale,
} from 'react-icons/sl'

import { MileageModal } from './components/mileageModal'

export const Profile = () => {
  // const elementRef = useRef(null)
  const [mileageModalOpen, setMileageModalOpen] = useState<boolean>(false)

  return (
    <div className="profile-layout">
      <div className="profile-content">
        <div className="profile-avatar">
          <Avatar
            size="9"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
        </div>
        <div className="profile-info">
          <div className="profile-nickname">
            hexdream
            <span className="gender">
              <SlSymbleFemale
                fontSize="18"
                color="pink"
              />
              {/* <SlSymbolMale
                fontSize="18"
                color="royalblue"
              /> */}
            </span>
          </div>
          <Separator
            my="1"
            size="4"
          />
          <div className="profile-follow">
            <Flex
              gap="3"
              align="center"
            >
              <div className="chunk">
                <p>1</p>
                <p>关注</p>
              </div>
              <Separator
                className="spearator"
                size="2"
                orientation="vertical"
              />
              <div className="chunk">
                <p>0</p>
                <p>粉丝</p>
              </div>
              <Separator
                className="spearator"
                size="2"
                orientation="vertical"
              />
              <div className="chunk">
                <p>9</p>
                <p>订阅</p>
              </div>
            </Flex>
          </div>
          <div className="profile-bio">还没有设置签名</div>
          <div className="profile-ip">IP属地：广东</div>
        </div>
      </div>

      <div className="time-content">
        <h3>收听时长</h3>

        <Card
          className="time-card"
          onClick={() => {
            setMileageModalOpen(true)
          }}
        >
          <div>
            <span className="num">143</span>时<span className="num">18</span>分
          </div>
          <div>
            总收听时长
            <ChevronRightIcon />
          </div>
        </Card>
      </div>

      <div className="sticker-content">
        <h3>我的贴纸库</h3>

        <Card className="sticker-card">
          <div>
            7张贴纸
            <ChevronRightIcon />
          </div>
          <div>最新：过了一个播客日</div>
        </Card>
      </div>

      <div className="history-content">
        <h3>最近听过</h3>

        <div className="history-episode-item">
          <div className="left">
            <ColorfulShadow
              className="episode-cover"
              curPointer
              mask
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            />
          </div>
          <div className="right">
            <p>小米SU7营销复盘：你所知道的为什么都是错的-Vol 46</p>
            <p>
              本期节目关注风口上的小米汽车，主播借助在营销、产品上的经验解答。欢迎在评论区留言发表你对小米汽车的感受与看法，对于节目话题的更多观点，获取更多未呈现在节目中的扩展阅读，欢迎加群讨论
            </p>
            <p>
              <span>30分钟 · 03/29</span>
              <span>
                <SlEarphones />
                4.3万+
                <SlBubble />
                349
              </span>
            </p>
          </div>
        </div>
      </div>

      <MileageModal
        open={mileageModalOpen}
        onClose={() => {
          setMileageModalOpen(false)
        }}
      />

      <Dialog.Root>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description
            size="2"
            mb="4"
          >
            Make changes to your profile.
          </Dialog.Description>

          <Flex
            direction="column"
            gap="3"
          >
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold"
              >
                Name
              </Text>
              <TextField.Root
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
              />
            </label>
            <label>
              <Text
                as="div"
                size="2"
                mb="1"
                weight="bold"
              >
                Email
              </Text>
              <TextField.Root
                defaultValue="freja@example.com"
                placeholder="Enter your email"
              />
            </label>
          </Flex>

          <Flex
            gap="3"
            mt="4"
            justify="end"
          >
            <Dialog.Close>
              <Button
                variant="soft"
                color="gray"
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

// if (elementRef.current) {
//   const { width, height } = elementRef.current.getBoundingClientRect()
//   console.log('bound', width, height)
// }
