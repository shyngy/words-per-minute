import axios from 'axios'
import { constants } from '../constants'

export const fetchWords = () => (dispatch) => {
  axios
    .get('https://random-word-api.herokuapp.com/word?number=380')
    .then(({ data }) => {
      dispatch(setApiWords(data))
    })
}

export const setApiWords = (word) => ({
  type: constants.SET_API_WORDS,
  payload: word,
})

export const wordInputEvent = () => ({ type: constants.WORD_INPUT_EVENT })
export const keyboardEvent = (symbol) => ({
  type: constants.KEYBOARD_EVENT,
  payload: symbol,
})
export const addLetter = (userTypedLetter) => ({
  type: constants.ADD_LETTER,
  payload: userTypedLetter,
})
export const timeOutEvent = () => ({
  type: constants.TIME_OUT_EVENT,
})

export const timeOut = () => (dispatch) => {
  setTimeout(() => {
    dispatch(timeOutEvent())
  }, 1000)
}
export const restartApp = () => ({ type: constants.RE_START })
export const changeTime = (time) => ({
  type: constants.CHANGE_TIME,
  payload: time,
})
