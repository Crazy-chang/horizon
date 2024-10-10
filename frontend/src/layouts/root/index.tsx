import {
  MagnifyingGlassIcon,
  GlobeIcon,
  CardStackIcon,
  StarIcon,
  GearIcon,
} from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/themes'
import { NavLink, Outlet } from 'react-router-dom'
import { PlayController, NavLogo, NavUser } from '@/components'
import './index.modules.scss'
// import { useEffect, useState } from 'react'
// import { envType } from '@/types/env'
// import { Environment } from 'wailsjs/runtime'

export const Root = () => {
  // const [envInfo, setEnvInfo] = useState<envType>()

  // useEffect(() => {
  //   Environment().then((res: envType) => {
  //     setEnvInfo(res)
  //   })
  // }, [])

  return (
    <>
      <div className="root-layout">
        <nav className="nav-layout">
          {/* <NavLogo /> */}

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
                to="subscription"
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
                to="favorites"
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
                to="setting"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                <span className="icon-box">
                  <GearIcon className="icon" />
                </span>
                设置
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="outlet-layout">
          <ScrollArea type="hover">
            <Outlet />
          </ScrollArea>
        </div>
      </div>

      <PlayController />
    </>
  )
}
