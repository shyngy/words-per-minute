import React from 'react'

const LoadingWords = ({ arrLength }) => {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
  }
  return (
    <>
      {Array(arrLength)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="loading-word"
            style={{ width: `${randomInteger(70, 160)}px` }}
          ></div>
        ))}
    </>
  )
}

export default LoadingWords
