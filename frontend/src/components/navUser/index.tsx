import './index.modules.scss'
import { useNavigateTo } from '@/hooks'

export const NavUser = () => {
  const goProfile = useNavigateTo('/profile')

  return (
    <div
      className="nav-user-layout"
      onClick={() => {
        goProfile()
      }}
    >
      <div className="left">
        <div className="avatar-box">
          <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop" />
        </div>
      </div>
      <div className="right">
        <div className="user-box">
          <p className="nickname">nickname</p>
        </div>
      </div>
    </div>
  )
}
