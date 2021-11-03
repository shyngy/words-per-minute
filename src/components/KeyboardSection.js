import React from 'react'
import { useSelector } from 'react-redux'
const keyboardSymbol = 'qwertyuiopasdfghjklzxcvbnm'.split('')
const KeyboardSection = () => {
  const words = useSelector(({ keyboard }) => keyboard.userTypedLetter)
  const splitWord = words.split('')

  return (
    <div className="editor-size-wrapper">
      <div className="keyboard">
        {keyboardSymbol.map((i) => {
          return (
            <React.Fragment key={i}>
              <span
                className={
                  i === splitWord[words.length - 1] ? 'active-button' : ''
                }
              >
                {i}
              </span>
              {i === 'p' || i === 'l' || i === 'm' ? <br /> : ''}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default KeyboardSection
