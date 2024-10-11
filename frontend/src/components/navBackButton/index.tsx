import { useBack } from '@/hooks'
import { Button } from '@radix-ui/themes'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

export const NavBackButton = () => {
  const back = useBack()

  return (
    <div>
      <Button
        onClick={back}
        size="1"
        variant={'ghost'}
        mt={'1'}
        mb={'2'}
      >
        <ArrowLeftIcon />
      </Button>
    </div>
  )
}
