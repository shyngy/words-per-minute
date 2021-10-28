import axios from 'axios'
import { constants } from '../constants'

export const fetchWords = () => (dispatch) => {
  axios
    .get('https://random-word-api.herokuapp.com/word?number=10')
    .then(({ data }) => {
      dispatch(setApiWords(data))
    })
}

export const setApiWords = (word) => ({
  type: constants.SET_API_WORDS,
  payload: word,
})

export const fetchKey = (key) => ({
  type: constants.KEYBOARD_EVENT,
  payload: key,
})
