import { combineReducers } from 'redux';

import textList from './text';
import currLang from './language';
import currTheme from './themes';

const rootReducer = combineReducers({
  text: textList,
  currLang: currLang,
  currTheme:currTheme
})

export { rootReducer }