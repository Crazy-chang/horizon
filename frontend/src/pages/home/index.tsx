import Popular from './components/popular'
import Recommended from './components/recommended'
import EditorRecommended from './components/editorRecommended'
import PeopleLike from './components/peopleLike'
import './index.modules.scss'

export const Home = () => {
  return (
    <div className="home-layout">
      <Popular />
      <Recommended />
      <EditorRecommended />
      <PeopleLike />
    </div>
  )
}
