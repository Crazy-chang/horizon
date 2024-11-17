import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { TitleBar } from './components'
import { Launch } from '@/pages'
import { ReadConfig } from 'wailsjs/go/bridge/App'

function App() {
  useEffect(() => {
    ReadConfig()
      .then((res) => {
        console.log('MAYDAY', res.user.refresh_token)
      })
      .catch((err: any) => {
        console.error('error', err)
      })
  }, [])

  return (
    <>
      <TitleBar />
      {/*<RouterProvider router={router} />*/}
      <Launch />
    </>
  )
}

export default App
