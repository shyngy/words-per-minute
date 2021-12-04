import React from 'react'
import ReloadImg from '../assets/images/reload.svg'
import { useDispatch } from 'react-redux'
import {
  addLetter,
  wordInputEvent,
  fetchWords,
  changeTime,
  restartApp,
} from '../store/actions/keyboardAction'

const WordsInput = ({ words }) => {
  const inputRef = React.useRef()
  const dispatch = useDispatch()
  const [userTypedLetter, setUserTypedLetter] = React.useState('')

  React.useEffect(() => {
    dispatch(fetchWords())
  }, [dispatch])

  React.useEffect(() => {
    dispatch(addLetter(userTypedLetter))
    dispatch(wordInputEvent())
  }, [dispatch, userTypedLetter])
  const restart = () => {
    dispatch(restartApp())
    dispatch(fetchWords())
    dispatch(changeTime(60))
  }
  return (
    <div className="input-container" ref={inputRef}>
      <input
        autoFocus
        className="words-input"
        value={words}
        onChange={(e) => setUserTypedLetter(e.target.value)}
      />

      <button className="refresh-button" onClick={restart}>
        <img src={ReloadImg} alt="Reload" />
      </button>
    </div>
  )
}

export default WordsInput
