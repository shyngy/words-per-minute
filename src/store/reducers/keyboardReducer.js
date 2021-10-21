
import { constants } from "../constants";

const initalState = {
  apiWords: [],
  userTypedLetter: '',
  userLetters: '',
  wordShift: 0,
  letters: '',
  correctWordBool: [],
  wrongWords: []
}


export const keyboard = (state = initalState, action) => {

  switch (action.type) {
    case "ADD_LETTER":
      return {
        ...state,
        userTypedLetter: action.payload
      }

    case constants.KEYBOARD_EVENT:

      const bool = []
      const letter = state.apiWords[state.wordShift]?.split('')

      const splitedWord = state.userTypedLetter.split('')

      if (splitedWord.join() === letter?.join()) {
        console.log(splitedWord);
        return {
          ...state,
          wordShift: state.wordShift + 1,
          userTypedLetter: ''
        }

      }
      state.correctWordBool.forEach((item)=>{
        if(item === false){
          console.log('word wrong');
        }
      })

     


      for (let index = 0; index < state.userTypedLetter.length; index++) {
        if (state.userTypedLetter[index] === ' ') {
          return {
            ...state,
            wordShift: state.wordShift + 1,
            userTypedLetter: ''
          }
        }
        console.log(state.userTypedLetter[index], letter[index]);
        if (state.userTypedLetter[index] === letter[index]) {
          bool[index] = true
        } else {
          bool[index] = false
        }

      }


      return {
        ...state,
        correctWordBool: [...bool]
      }

    case constants.SET_API_WORDS:

      return {
        ...state,
        apiWords: action.payload
      }

    case "wrong_word":

      return {
        ...state
      }

    default:
      return state

  }
}


// export const keyboard = (state = initalState, action) => {
//   switch (action.type) {
//     case constants.ADD_KEY:
//       console.log(action);
//       return {
//         ...state,
//         items: action.payload
//       }
//     default:
//       return {
//         ...state
//       }
//   }
// }


