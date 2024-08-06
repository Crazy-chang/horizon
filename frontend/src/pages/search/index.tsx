import './index.modules.scss'
import { Button, TextField } from '@radix-ui/themes'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export const Search = () => {
  return (
    <div className="search-layout">
      <h3>搜索</h3>

      <div className="search-content">
        <div className="search-input">
          <div className="left">
            <TextField.Root
              size="3"
              placeholder="Search the docs…"
            >
              <TextField.Slot>
                <MagnifyingGlassIcon
                  height="16"
                  width="16"
                />
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div className="right">
            <Button size="3">搜索</Button>
          </div>
        </div>

        <div className="search-for-you">
          <div>搜搜看</div>
          <div>
            <span>one</span>
            <span>two</span>
            <span>three</span>
            <span>four</span>
            <span>five</span>
          </div>
        </div>

        <div className="search-result">result</div>
      </div>
    </div>
  )
}
