import { SWITCH_THEME, switchTheme } from "../actions/themes";

const initialState = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light';

const currTheme = (state = initialState, action) => {
  switch (action.type) {

    case SWITCH_THEME:
      return action.theme

    default:
      return state
  }
}
export default currTheme;