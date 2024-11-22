import React, { useEffect, useState } from 'react'
import { Card } from '@radix-ui/themes'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { MileageModal } from '@/pages/profile/components/mileageModal'
import { mileageGet } from '@/api/mileage'
import './index.modules.scss'

const formatTime = (seconds: number): number[] => {
  const hours: number = Math.floor(seconds / 3600)
  const minutes: number = Math.floor(seconds / 3600 / 60)

  return [hours, minutes]
}

export const MileageDuration: React.FC = () => {
  const [mileageModalOpen, setMileageModalOpen] = useState<boolean>(false)
  const [time, setTime] = useState<number[]>([0, 0])
  const [data, setData] = useState<any>({})

  useEffect(() => {
    mileageGet().then((res) => {
      const total: number = res.data.data.totalPlayedSeconds

      setTime(formatTime(total))
      setData({
        ...res.data.data,
        time: formatTime(total),
      })
    })
  }, [])

  return (
    <div className="time-content">
      <h3>收听时长</h3>

      <Card
        className="time-card"
        onClick={() => {
          setMileageModalOpen(true)
        }}
      >
        <div>
          <span className="num">{time[0]}</span>时
          <span className="num">{time[1]}</span>分
        </div>
        <div>
          总收听时长
          <ChevronRightIcon />
        </div>
      </Card>

      <MileageModal
        data={data}
        open={mileageModalOpen}
        onClose={() => {
          setMileageModalOpen(false)
        }}
      />
    </div>
  )
}
