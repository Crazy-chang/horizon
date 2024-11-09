import React, { useEffect, useState } from 'react'
import './index.modules.scss'

const TEMP_BACKGROUND_IMAGE: string =
  'https://image.xyzcdn.net/FnQ-E7VcqLbzqplvdVPGrQRGHmxC.jpg@large'
const TEMP_BACKGROUND_IMAGE_2: string =
  'https://image.xyzcdn.net/FqUrrUGD1YIaeVqrpn9MV0yPz_iY.jpg@large'

type IProps = {
  hasOpen: boolean
}

export const CoverBox: React.FC<IProps> = ({ hasOpen }) => {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    if (hasOpen && !toggle) {
      setTimeout(() => {
        setToggle(true)
      }, 1500)
    }
  }, [hasOpen])

  return (
    <div className="cover-box-layout">
      <div
        className="cover-box"
        onClick={() => {
          handleToggle()
        }}
      >
        <img
          className={toggle ? 'cb-episode-image' : 'cb-episode-image-active'}
          src={TEMP_BACKGROUND_IMAGE}
          alt="cover-image"
        />
        <img
          className={toggle ? 'cb-podcast-image' : 'cb-podcast-image-active'}
          src={TEMP_BACKGROUND_IMAGE_2}
          alt="cover-image"
        />
      </div>
    </div>
  )
}
