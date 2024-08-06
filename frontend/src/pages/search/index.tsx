import './index.modules.scss'
import { Box, Button, Tabs, TextField, Text } from '@radix-ui/themes'
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

        <div className="search-result">
          <Tabs.Root defaultValue="1">
            <Tabs.List size="2">
              <Tabs.Trigger value="1">节目</Tabs.Trigger>
              <Tabs.Trigger value="2">单集</Tabs.Trigger>
              <Tabs.Trigger value="3">用户</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="1">
                <Text size="2">Make changes to your account.</Text>
              </Tabs.Content>

              <Tabs.Content value="2">
                <Text size="2">Access and update your documents.</Text>
              </Tabs.Content>

              <Tabs.Content value="3">
                <Text size="2">
                  Edit your profile or update contact information.
                </Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </div>
      </div>
    </div>
  )
}
