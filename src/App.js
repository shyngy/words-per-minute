import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchKey, fetchWords } from './redux/actions/keyboardAction'

function App() {
  const dispatch = useDispatch()
  const [userTypedLetter, setUserTypedLetter] = React.useState('')

  const onChangeUserInput = (e) => {
    setUserTypedLetter(e.target.value)
  }
  React.useEffect(() => {
    dispatch(fetchWords())
  }, [dispatch])

  React.useEffect(() => {
    dispatch({ type: 'ADD_LETTER', payload: userTypedLetter })
    dispatch({ type: 'keyboad/KEYBOARD_EVENT' })
    dispatch({ type: 'comparisonWords', payload: userTypedLetter })
  }, [dispatch, userTypedLetter])

  const api = useSelector(({ keyboard }) => keyboard.randomWords)
  const words = useSelector(({ keyboard }) => keyboard.userTypedLetter)
  const wordShift = useSelector(({ keyboard }) => keyboard.wordShift)

  return (
    <div className="App">
      <strong>{userTypedLetter}</strong>
      <div style={{ margin: 10 }}>
        {api.map((item, index) => {
          return (
            <span
              key={item}
              className={index === wordShift ? 'current-word' : ''}
              style={{ margin: 5 }}
            >
              {item}
            </span>
          )
        })}
      </div>
      <input value={words} onChange={onChangeUserInput} />
    </div>
  )
}

export default App

// const dispatch = useDispatch();
//   const keys = useSelector(({ keyboard }) => keyboard)
//   React.useEffect(() => {
//     dispatch(fetchKey(key))
//   }, [key, dispatch])
//   const hello = ['hello', 'world']
//   let switchColor = ""
//   console.log(key);
