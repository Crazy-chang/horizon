import Popular from '@/pages/home/components/popular'
import Recommended from '@/pages/home/components/recommended'
import EditorRecommended from '@/pages/home/components/editorRecommended'
import './index.modules.scss'

export const Home = () => {
  return (
    <div className="home-layout">
      {/*最受欢迎*/}
      <Popular />

      {/*精选*/}
      <Recommended />

      {/*编辑最爱*/}
      <EditorRecommended />

      {/*TA们的喜欢*/}
    </div>
  )
}
