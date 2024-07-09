import {
  MagnifyingGlassIcon,
  GlobeIcon,
  CardStackIcon,
  InfoCircledIcon,
  StarIcon,
} from '@radix-ui/react-icons'
import { NavLink, Outlet } from 'react-router-dom'
import { PlayController, NavLogo, NavUser } from '@/components'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.modules.scss'
import { CSSProperties } from 'react'

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
          <Scrollbars
            autoHide
            renderThumbVertical={() => {
              const thumbStyle: CSSProperties = {
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '6px',
              }
              return <div style={{ ...thumbStyle }} />
            }}
          >
            <Outlet />
          </Scrollbars>
        </div>
      </div>

      <PlayController />
    </>
  )
}
