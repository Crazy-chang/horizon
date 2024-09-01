import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import { DraggableBar, TitleBar } from './components'
import { Environment } from 'wailsjs/runtime'
import { useEffect, useState } from 'react'
import { envType } from './types/env'

function App() {
  const [envInfo, setEnvInfo] = useState<envType>()

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <>
      <TitleBar />
      {/* {envInfo?.platform !== 'windows' && <DraggableBar />} */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
