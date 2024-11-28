import React, { useEffect, useState } from 'react'
import Popular from './components/popular'
import Recommended from './components/recommended'
import EditorRecommended from './components/editorRecommended'
import PeopleLike from './components/peopleLike'
import { discovery, refreshEpisodeCommend } from '@/api/discover'
import { DISCOVERY_TYPE_ENUM } from '@/types/discovery'
import './index.modules.scss'
import { EpisodeType } from '@/types/episode'

export type PopularType = {
  target?: TargetType[]
  recommendation?: string
}

export type TargetType = {
  episode: EpisodeType
  recommendation: string
}

export const Home: React.FC = () => {
  const [popular, setPopular] = useState<{
    records: PopularType
    loading: boolean
  }>({
    records: {},
    loading: false,
  }) // 大家都在听
  const [editorRecommended, setEditorRecommended] = useState<{
    records: {}
    loading: boolean
  }>({
    records: {},
    loading: false,
  }) // 编辑精选

  const onRefreshEpisodeCommend = () => {
    setPopular({
      ...popular,
      loading: true,
    })

    refreshEpisodeCommend()
      .then((res) => {
        setPopular({
          records: res.data.data,
          loading: false,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  /**
   * 获取「大家都在听」和「编辑精选」
   */
  const getPopularAndRecommended = () => {
    setPopular({
      records: {},
      loading: true,
    })

    discovery({ loadMoreKey: '' })
      .then((res) => {
        res.data.data.forEach((item: any) => {
          if (item.type === DISCOVERY_TYPE_ENUM.POPULAR) {
            setPopular({
              records: item.data,
              loading: false,
            })
          }
          if (item.type === DISCOVERY_TYPE_ENUM.EDITOR_RECOMMENDED) {
            console.log(item.data)
            setEditorRecommended({
              records: item.data,
              loading: false,
            })
          }
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getPopularAndRecommended()
  }, [])

  return (
    <div className="home-layout">
      <Popular
        data={popular.records}
        loading={popular.loading}
        onRefresh={() => {
          onRefreshEpisodeCommend()
        }}
      />
      <Recommended />
      <EditorRecommended
        data={editorRecommended.records}
        loading={editorRecommended.loading}
      />
      <PeopleLike />
    </div>
  )
}
