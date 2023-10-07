import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion"

import mainStyles from './main.module.css'

function Main() {

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

    const nameOptions = text.find((el) => { return el.type === 'name' }).text
    const statusOptions = text.find((el) => { return el.type === 'status' }).text
    const aboutOptions = text.find((el) => { return el.type === 'about' }).text
    const inspectOptions = text.find((el) => { return el.type === 'toknow' }).text

    const [input1, setInput] = React.useState('')
    const input2 = React.useRef()

    const [name, setName] = React.useState(nameOptions[currLang])
    const [status, setStatus] = React.useState(statusOptions[currLang])
    const [about, setAbout] = React.useState(aboutOptions[currLang])
    const [inspect, setInspect] = React.useState(inspectOptions[currLang])

    React.useEffect(() => {
        setName(nameOptions[currLang])
        setStatus(statusOptions[currLang])
        setAbout(aboutOptions[currLang])
        setInspect(inspectOptions[currLang])
    }, [currLang])
    
    function click() {
        console.log(input1, input2.current.value);
    }

    return (
        <section className={`${mainStyles.content}`}>
            <input onChange={event => setInput(event.target.value)}/>
            <input ref={input2}/>
            <button onClick={(ev) => click(ev)}/>
            <div className={`${mainStyles.block}`}>
                <div className={`${mainStyles.heading}`}>
                <h1 className={`text text_size_h4 text_theme_dark`}>тут название секции</h1>
                    <div className={`${mainStyles.heading_glow__top}`} />
                    <div className={`${mainStyles.heading_glow__bottom}`} />
                    </div>
                <div className={`${mainStyles.block__content}`}>
                    <h1 className={`text text_size_h3 text_theme_dark ${mainStyles.block__main_text}`}>какой-то текст для наглядности</h1>
                    <div className={`${mainStyles.glow__top}`} />
                    <div className={`${mainStyles.glow__bottom}`} />
                </div>
            </div>
        </section>
    );
}

export default Main;