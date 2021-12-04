import React from 'react'

const LoadingWords = ({ arrLength }) => {
  return (
    <>
      {Array(arrLength)
        .fill(null)
        .map((_, index) => (
          <React.Fragment key={index}>
            <div
              className="loading-word"
              style={{ width: `${randomInteger(60, 110)}px` }}
            ></div>
            {(index + 1) % 10 === 0 && <br />}
          </React.Fragment>
        ))}
    </>
  )
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export default LoadingWords
