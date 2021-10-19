
import { constants } from "../constants";

const initalState = {
  apiWords: [],
  userTypedLetter: '',
  userLetters: '',
  wordShift: 0,
  letters: '',
  correctWordBool: [],

}


export const keyboard = (state = initalState, action) => {

  switch (action.type) {
    case "ADD_LETTER":
      return {
        ...state,
        userTypedLetter: action.payload
      }

    case constants.KEYBOARD_EVENT:
      let nextWord = 0
      const bool = []
      const letter = state.apiWords[state.wordShift]?.split('') 
      console.log(nextWord);
      const splitedWord = state.userTypedLetter.split('')
      if(splitedWord.join() === letter?.join()){
        console.log('hello');
        return{
          ...state,
          wordShift: state.wordShift + 1,
          userTypedLetter: ''
        }
        
      }
      console.log(state.wordShift);
      console.log(splitedWord, letter);
      for (let index = 0; index < state.userTypedLetter.length; index++) {
        console.log(state.userTypedLetter[index],letter[index]);
        if(state.userTypedLetter[index] === letter[index]){
          bool[index] = true
        }else{
          bool[index] = false
        }
        
      }
      
    
      return {
        ...state,
        // userTypedLetter: action.payload
      }
      
    case constants.SET_API_WORDS:
      
      return {
        ...state,
        apiWords: action.payload
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


