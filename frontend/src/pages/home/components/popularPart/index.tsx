import React from 'react'
import './index.modules.scss'

const mockData = [
  {
    id: 1,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: 'Vol.29 有声书 | 行李箱碎尸案背后的真相',
    podcast: '没药花园',
    description: '3 天前发布',
  },
  {
    id: 2,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: 'Vol.55 如何拯救自己的倾诉欲',
    podcast: '不把天聊si',
    description: '评论数 99+',
  },
  {
    id: 3,
    episode_img:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop',
    title: '搞笑女01. 《奇葩说》选手的跨国恋情笑料分享会',
    podcast: '东七门',
    description: '评论数 99+',
  },
]

/**
 * 发现-大家都在听
 * @constructor
 */
const PopularPart = () => {
  return (
    <div className="popular-layout">
      <h3>大家都在听</h3>

      <div className="popular-content">
        {mockData.map((item: any) => (
          <div
            className="popular-item"
            key={item.id}
          >
            <div className="popular-info">info</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularPart
