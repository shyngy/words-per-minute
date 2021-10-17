import produce from "immer";
import { constants } from "../constants";

const initalState = {
  keys: []
}


export const keyboard = produce((draft, action) => {
  switch (action.type) {
    case constants.ADD_KEY:
      draft.keys = action.payload;

  
      
      draft.keys.forEach((e, i)=>{
        if(e === 'Backspace'){
          draft.keys.splice(--i)
        }
      })
      break;
    default:
      break;
  }
}, initalState)


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


