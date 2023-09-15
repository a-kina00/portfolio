import { combineReducers } from 'redux';

import textList from './text';
import projectsList from './projects';
import currLang from './language';
import currTheme from './themes';
import modalList from './modal';

const rootReducer = combineReducers({
  text: textList,
  projects: projectsList,
  currLang: currLang,
  currTheme:currTheme,
  modal: modalList
})

export { rootReducer }