import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import LoadingWords from './LoadingWords'
const WordsSection = () => {
  const { randomWords, wordShift, listCorrectWords, typedWord } = useSelector(
    ({ keyboard }) => keyboard
  )
  let [isWrong, setIsWrong] = React.useState(false)
  React.useEffect(() => {
    !listCorrectWords.length && setIsWrong(false)
    listCorrectWords.forEach((item) => {
      if (!item) return setIsWrong(true)
      setIsWrong(false)
    })
  }, [listCorrectWords])

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
                { 'wrong-word': index === wordShift && isWrong },
                { 'typed-words': typedWord[index] === item }
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
