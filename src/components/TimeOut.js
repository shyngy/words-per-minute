import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { timeOut } from '../store/actions/keyboardAction'

const TimeOut = () => {
  const dispatch = useDispatch()

  const active = useSelector(({ keyboard }) => keyboard.activeTimeOut)
  const time = useSelector(({ keyboard }) => keyboard.time)
  React.useEffect(() => {
    if (active === true && time > 0) {
      dispatch(timeOut())
    }
  }, [time, active, dispatch])

  return <span className="time">0:{time < 10 ? `0${time}` : time}</span>
}

export default TimeOut
