import { ColorfulShadow } from '@/components'
import './index.modules.scss'

const PIC_URL =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'

export const Home = () => {
  return (
    <div style={{ padding: '0 14px' }}>
      <ColorfulShadow src={PIC_URL} />
    </div>
  )
}
