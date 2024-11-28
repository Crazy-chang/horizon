import React, { useEffect, useState } from 'react'
import { ColorfulShadow } from '@/components'
import { QuoteIcon, UpdateIcon } from '@radix-ui/react-icons'
import { Button, Spinner } from '@radix-ui/themes'
import { discovery } from '@/api/discover'
import { DISCOVERY_TYPE_ENUM } from '@/types/discovery'
import './index.modules.scss'

/**
 * 发现-大家都在听
 * @constructor
 */
const PopularPart: React.FC = () => {
  const [popular, setPopular] = useState<any>({}) // 大家都在听
  const [loading, setLoading] = useState<boolean>(false)

  /**
   * 获取「大家都在听」
   */
  const getPopularAndRecommended = () => {
    setLoading(true)

    discovery({ loadMoreKey: '' })
      .then((res) => {
        res.data.data.forEach((item: any) => {
          if (item.type === DISCOVERY_TYPE_ENUM.POPULAR) {
            setPopular(item.data)
          }
        })
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getPopularAndRecommended()
  }, [])

  return (
    <div className="popular-layout">
      <h3>{popular.title}</h3>

      {loading ? (
        <Spinner />
      ) : (
        <div className="popular-content">
          {popular?.target?.map((item: any) => (
            <div
              className="popular-item"
              key={item.episode.eid}
            >
              <div className="popular-info">
                <div className="cover-box">
                  <ColorfulShadow
                    src={
                      item.episode?.image
                        ? item.episode.image.picUrl
                        : item.episode.podcast.image.picUrl
                    }
                    mask
                    curPointer
                  />
                </div>
                <div className="info-box">
                  <p>{item.episode.podcast.title}</p>
                  <p>{item.episode.title}</p>
                  <p>
                    <QuoteIcon />
                    {item.recommendation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="reload-button">
        <Button
          size="1"
          variant="soft"
        >
          <UpdateIcon />
          换一换
        </Button>
      </div>
    </div>
  )
}

export default PopularPart
