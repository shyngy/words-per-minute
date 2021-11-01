import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import LoadingWords from './LoadingWords'
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
    <ul className="random-words">
      {!randomWords.length && <LoadingWords arrLength={30} />}
      {randomWords &&
        randomWords.map((item, index) => {
          return (
            <li
              key={item}
              className={classNames(
                { 'current-word': index === wordShift },
                { 'wrong-word': index === wordShift && !isWrong }
              )}
            >
              {item}
            </li>
          )
        })}
    </ul>
  )
}

export default WordsSection
