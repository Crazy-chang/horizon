import React, { useEffect, useState } from 'react'
import Popular from './components/popular'
import Recommended from './components/recommended'
import EditorRecommended from './components/editorRecommended'
import PeopleLike from './components/peopleLike'
import { discovery } from '@/api/discover'
import { DISCOVERY_TYPE_ENUM } from '@/types/discovery'
import './index.modules.scss'

export const Home: React.FC = () => {
  const [editorRecommended, setEditorRecommended] = useState<any>({}) // 编辑精选

  /**
   * 获取「大家都在听」和「编辑精选」
   */
  const getPopularAndRecommended = () => {
    discovery({ loadMoreKey: '' })
      .then((res) => {
        res.data.data.forEach((item: any) => {
          if (item.type === DISCOVERY_TYPE_ENUM.EDITOR_RECOMMENDED) {
            setEditorRecommended(item.data)
          }
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    // getPopularAndRecommended()
  }, [])

  return (
    <div className="home-layout">
      <Popular />
      <Recommended />
      <EditorRecommended />
      <PeopleLike />
    </div>
  )
}
