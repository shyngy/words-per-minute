import React from 'react'
import Navbar from '../components/Navbar'
import WordsInput from '../components/WordsInput'
import WordsSection from '../components/WordsSection'

import { useSelector } from 'react-redux'
import Alert from '../components/Alert'
function Wpm() {
  const {
    userTypedLetter,
    randomWords,
    wordShift,
    listCorrectLetter,
    typedWord,
    time,
  } = useSelector(({ keyboard }) => keyboard)

  return (
    <div>
      <Navbar />
      {time === 0 ? (
        <Alert wpm={wordShift} />
      ) : (
        <WordsSection
          randomWords={randomWords}
          listCorrectLetter={listCorrectLetter}
          wordShift={wordShift}
          typedWord={typedWord}
        />
      )}

      <WordsInput words={userTypedLetter} />
    </div>
  )
}

export default Wpm
