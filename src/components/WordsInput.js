import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addLetter,
  wordInputEvent,
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
    dispatch(wordInputEvent())
  }, [dispatch, userTypedLetter])

  const onKey = (e) => {
    console.log(e)
  }

  return (
    <div className="input-container">
      <input
        className="words-input"
        onKeyPress={onKey}
        value={words}
        onChange={(e) => setUserTypedLetter(e.target.value)}
      />
    </div>
  )
}

export default WordsInput
