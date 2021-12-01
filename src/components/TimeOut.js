import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timeOut } from '../store/actions/keyboardAction'

const TimeOut = () => {
  const dispatch = useDispatch()

  const active = useSelector((state) => state.keyboard.activeTimeOut)
  const time = useSelector((state) => state.keyboard.time)
  React.useEffect(() => {
    if (active && time > 0) {
      dispatch(timeOut())
    }
  }, [time, active, dispatch])

  return <span className="time">0:{time < 10 ? `0${time}` : time}</span>
}

export default TimeOut
