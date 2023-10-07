import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { switchTheme } from '../services/actions/themes';

import Menu from './menu/menu';
import Modal from "./modal/modal";
import Heading from './pages/home/heading/heading';
import About from "./pages/home/about/about";
import Portfolio from "./pages/home/portfolio/portfolio";
import Main from "./pages/home/main/main";

import appStyles from './App.module.css'

const git = require('./icons8-github.json')

function App() {

  const dispatch = useDispatch();

  const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    dispatch(switchTheme({ theme: event.matches ? "dark" : "light" }))
  });

  function separateSentence(sentence) {

    const arr = Array.from(sentence);

    let count = 0;
    arr.forEach((el) => { if (el === '.') count++ })
    let index = -1;
    let indexes = [0]

    for (let i = 0; i < count; i++) {
      index = arr.indexOf('.', index + 1)
      indexes.push(index)
    }

    let phrase = '';
    const phrases = [];
    let iteration = 0;

    for (let i = 0; i < indexes.length; i++) {

      for (let k = indexes[i] + iteration; k <= indexes[i + 1]; k++) {
        phrase = phrase + sentence[k]
        phrases[i] = phrase
      }

      phrase = '';
      iteration = 2;
    }

    return phrases;
  }

  return (
    <div className={`${appStyles[`app_theme_${currTheme}`]} ${appStyles.app}`}>
      <Modal />
      <Main />
      <div className={`${appStyles[`app_theme_${currTheme}`]} ${appStyles.credits}`}>
        <a className={`link link_theme_${currTheme}`} target="_blank" href="https://icons8.com/icon/v551nqGeHhGn/github">GitHub</a> <p className={`text text_theme_${currTheme}`}>icon by</p> <a className={`link link_theme_${currTheme}`} target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  );
}

export default App;
