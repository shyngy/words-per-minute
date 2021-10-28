import { constants } from '../constants'

const initalState = {
  randomWords: [],
  userTypedLetter: '',

  wordShift: 0,
  allWords: [],
  correctWordBool: [],

  comparisonWords: [],
}

export const keyboard = (state = initalState, action) => {
  console.log(state.comparisonWords)
  switch (action.type) {
    case 'ADD_LETTER':
      return {
        ...state,
        userTypedLetter: action.payload,
      }

    case constants.KEYBOARD_EVENT:
      const wordsInBool = []
      const randomLetter = state.randomWords[state.wordShift]?.split('')

      const userLetter = state.userTypedLetter.split('')

      if (userLetter.join() === randomLetter?.join()) {
        let comparisonWords = []
        console.log(userLetter.join(''))
        const index = state.randomWords.indexOf(userLetter.join(''))

        comparisonWords = userLetter.join('')
        return {
          ...state,
          wordShift: state.wordShift + 1,
          userTypedLetter: '',
          comparisonWords: [...state.comparisonWords, comparisonWords],
        }
      }

      for (let index = 0; index <= state.userTypedLetter.length; index++) {
        if (state.userTypedLetter[index] === ' ') {
          if (index === 0) {
            return {
              ...state,
              userTypedLetter: '',
            }
          }
          return {
            ...state,
            wordShift: state.wordShift + 1,
            userTypedLetter: '',
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
        correctWordBool: [...wordsInBool],
      }

    case constants.SET_API_WORDS:
      return {
        ...state,
        randomWords: action.payload,
      }

    case 'comparisonWords':
      for (let index = 0; index < state.randomWords.length; index++) {
        if (index === state.randomWords.length - 1) {
        }
      }

      return {
        ...state,
      }

    default:
      return state
  }
}
