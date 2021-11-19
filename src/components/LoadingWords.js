import React, { Fragment } from 'react'

const LoadingWords = ({ arrLength }) => {
  return (
    <>
      {Array(arrLength)
        .fill(null)
        .map((_, index) => (
          <Fragment key={index}>
            <div
              className="loading-word"
              style={{ width: `${randomInteger(60, 110)}px` }}
            ></div>
            {(index + 1) % 10 === 0 && <br />}
          </Fragment>
        ))}
    </>
  )
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export default LoadingWords
