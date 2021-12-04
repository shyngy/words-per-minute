import React from 'react'
import classNames from 'classnames'
import LoadingWords from './LoadingWords'

const WordsSection = ({
  randomWords,
  wordShift,
  listCorrectLetter,
  typedWord,
}) => {
  const scrollRef = React.useRef(null)

  let [isWrong, setIsWrong] = React.useState(false)
  React.useEffect(() => {
    setIsWrong(listCorrectLetter.every((e) => e === true))
  }, [listCorrectLetter])
  React.useEffect(() => {
    if (wordShift % 8 === 0) {
      scrollRef.current.scrollBy(0, 40)
    }

    scrollRef.current.style.overflow = 'hidden'
  }, [wordShift])
  return (
    <div className="random-words">
      <div className="words-section" ref={scrollRef}>
        {!randomWords.length && <LoadingWords arrLength={30} />}
        {randomWords &&
          randomWords.map((item, index) => {
            return (
              <React.Fragment key={item}>
                <span
                  className={classNames(
                    { 'current-word': index === wordShift },
                    { 'wrong-word': index === wordShift && !isWrong },
                    { 'typed-words': typedWord[index] === item }
                  )}
                >
                  {item}
                </span>
                {(index + 1) % 8 === 0 && <br />}
              </React.Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default WordsSection
