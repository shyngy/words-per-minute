import { constants } from "../constants"

export const fetchKey = (key) => ({
  type: constants.ADD_KEY,
  payload: key
})