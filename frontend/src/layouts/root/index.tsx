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
import { useEffect, useState } from 'react'
import { envType } from '@/types/env'
import { Environment } from 'wailsjs/runtime'

export const Root = () => {
  const [envInfo, setEnvInfo] = useState<envType>()

  useEffect(() => {
    Environment().then((res: envType) => {
      setEnvInfo(res)
    })
  }, [])

  return (
    <>
      <div
        style={
          envInfo?.platform === 'windows'
            ? { height: 'calc(100vh - 70px)' }
            : { height: 'calc(100vh - 110px)' }
        }
        className="root-layout"
      >
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
                发现
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
                搜索
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
                订阅
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
                关于
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
