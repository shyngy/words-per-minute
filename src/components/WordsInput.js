import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addLetter,
  keyboardEvent,
  fetchWords,
} from '../store/actions/keyboardAction'
const WordsInput = () => {
  const dispatch = useDispatch()
  const [userTypedLetter, setUserTypedLetter] = React.useState('')
  const words = useSelector(({ keyboard }) => keyboard.userTypedLetter)
  React.useEffect(() => {
    dispatch(fetchWords())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(addLetter(userTypedLetter))
    dispatch(keyboardEvent())
  }, [dispatch, userTypedLetter])
  return (
    <div>
      <input
        value={words}
        onChange={(e) => setUserTypedLetter(e.target.value)}
      />
    </div>
  )
}

export default WordsInput
