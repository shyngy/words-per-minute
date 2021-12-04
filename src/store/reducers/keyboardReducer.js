import { constants } from '../constants'

const initialState = {
  randomWords: [],
  userTypedLetter: '',
  wordShift: 0,
  listCorrectLetter: [],
  typedWord: [],
  activeTimeOut: false,
  time: 60,
}

export const keyboard = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_LETTER:
      return {
        ...state,
        userTypedLetter: action.payload,
      }

    case constants.WORD_INPUT_EVENT:
      if (state.typedWord.length === state.randomWords.length) return state

      if (state.time === 0) return state

      const wordsInBool = []
      const randomLetter = state.randomWords[state.wordShift]?.split('')

      const userLetter = state.userTypedLetter.split('')

      if (userLetter.join() === randomLetter?.join()) {
        console.log(userLetter.join(''))
        return {
          ...state,
          wordShift: state.wordShift + 1,
          userTypedLetter: '',
          typedWord: [...state.typedWord, userLetter.join('')],
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
        listCorrectLetter: [...wordsInBool],
        activeTimeOut: true,
      }

    case constants.SET_API_WORDS:
      return {
        ...state,
        randomWords: action.payload,
      }

    case constants.TIME_OUT_EVENT:
      if (!state.randomWords.length) {
        return state
      }
      return {
        ...state,
        time: state.time - 1,
      }
    case constants.RE_START:
      return initialState
    case constants.CHANGE_TIME:
      return {
        ...state,
        time: action.payload,
      }
    default:
      return state
  }
}
