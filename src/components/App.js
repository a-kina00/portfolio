import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { switchTheme } from '../services/actions/themes';

import Menu from './menu/menu';
import Heading from './pages/home/heading/heading';
import About from "./pages/home/about/about";

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
    <div className={`${appStyles[`app_theme_${currTheme}`]}`}>
      <Menu />
      <Heading separateSentence={separateSentence} gitIcon={git} />
      <About />
    </div>
  );
}

export default App;
