import { SWITCH_LANG, switchLang } from "../actions/language";

const initialState = 'ru';

const currLang = (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_LANG:
      return action.lang 

    default:
      return state
  }
}
export default currLang;