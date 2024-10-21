import { useBack } from '@/hooks'
import { Button } from '@radix-ui/themes'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import './index.modules.scss'

export const NavBackButton = () => {
  const back = useBack()

  return (
    <div className="nav-back-button">
      <Button
        onClick={back}
        size="1"
        variant={'ghost'}
        mt={'1'}
        mb={'2'}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  )
}
