import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
const WordsSection = () => {
  const randomWords = useSelector(({ keyboard }) => keyboard.randomWords)
  const wordShift = useSelector(({ keyboard }) => keyboard.wordShift)
  const listCorrectWords = useSelector(
    ({ keyboard }) => keyboard.listCorrectWords
  )
  let isWrong = true
  listCorrectWords.forEach((item) => {
    if (!item) {
      isWrong = false
    }
  })
  return (
    <div style={{ margin: 10 }}>
      {randomWords.map((item, index) => {
        return (
          <span
            key={item}
            className={classNames(
              { 'current-word': index === wordShift },
              { 'wrong-word': index === wordShift && !isWrong }
            )}
            style={{ margin: 5 }}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default WordsSection
