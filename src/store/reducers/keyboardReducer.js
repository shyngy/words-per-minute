import { constants } from '../constants'

const initialState = {
  randomWords: [],
  userTypedLetter: '',
  wordShift: 0,
  listCorrectWords: [],
}

export const keyboard = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_LETTER:
      return {
        ...state,
        userTypedLetter: action.payload,
      }

    case constants.KEYBOARD_EVENT:
      const wordsInBool = []
      const randomLetter = state.randomWords[state.wordShift]?.split('')

      const userLetter = state.userTypedLetter.split('')

      if (userLetter.join() === randomLetter?.join()) {
        return {
          ...state,
          wordShift: state.wordShift + 1,
          userTypedLetter: '',
        }
      }

      for (let index = 0; index < state.userTypedLetter.length; index++) {
        if (state.userTypedLetter[index] === ' ') {
          return {
            ...state,
            userTypedLetter: state.userTypedLetter.replace(/\s/g, ''),
          }
        }

        if (
          state.userTypedLetter &&
          state.userTypedLetter[index] === randomLetter[index]
        ) {
          wordsInBool[index] = true
        } else {
          wordsInBool[index] = false
        }
      }

      return {
        ...state,
        listCorrectWords: [...wordsInBool],
      }

    case constants.SET_API_WORDS:
      return {
        ...state,
        randomWords: action.payload,
      }

    default:
      return state
  }
}
