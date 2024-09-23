import { useRef } from 'react'
import './index.modules.scss'

export const Profile = () => {
  const elementRef = useRef(null)

  return (
    <div className="profile-layout">
      <div ref={elementRef}>Profile</div>
    </div>
  )
}

// if (elementRef.current) {
//   const { width, height } = elementRef.current.getBoundingClientRect()
//   console.log('bound', width, height)
// }
