import axios from 'axios'
import { constants } from '../constants'

export const fetchWords = () => (dispatch) => {
  axios
    .get('https://random-word-api.herokuapp.com/word?number=31')
    .then(({ data }) => {
      dispatch(setApiWords(data))
    })
}

export const setApiWords = (word) => ({
  type: constants.SET_API_WORDS,
  payload: word,
})

export const keyboardEvent = () => ({ type: constants.KEYBOARD_EVENT })

export const addLetter = (userTypedLetter) => ({
  type: constants.ADD_LETTER,
  payload: userTypedLetter,
})
