import {
  MagnifyingGlassIcon,
  GlobeIcon,
  CardStackIcon,
  InfoCircledIcon,
  StarIcon,
} from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/themes'
import { NavLink, Outlet } from 'react-router-dom'
import { PlayController, NavLogo, NavUser } from '@/components'
import './index.modules.scss'

export const Root = () => {
  return (
    <>
      <div className="root-layout">
        <nav className="nav-layout">
          <NavLogo />

          <NavUser />

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <GlobeIcon className="icon" />
                </span>
                <span>发现</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="search"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <MagnifyingGlassIcon className="icon" />
                </span>
                <span>搜索</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="subscribe"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <CardStackIcon className="icon" />
                </span>
                <span>订阅</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="login"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <StarIcon className="icon" />
                </span>
                收藏
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <InfoCircledIcon className="icon" />
                </span>
                <span>关于</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="outlet-layout">
          <ScrollArea type="scroll">
            <Outlet />
          </ScrollArea>
        </div>
      </div>

      <PlayController />
    </>
  )
}
