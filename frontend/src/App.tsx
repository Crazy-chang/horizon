import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { TitleBar } from './components'
import { Launch } from '@/pages'

function App() {
  return (
    <>
      <TitleBar />
      {/*<RouterProvider router={router} />*/}
      <Launch />
    </>
  )
}

export default App
