import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { DraggableBar } from './components'

function App() {
  return (
    <>
      <DraggableBar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
