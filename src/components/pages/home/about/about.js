import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import aboutStyles from './about.module.css'

function About() {

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

    const nameOptions = text.find((el) => { return el.type === 'name' }).text
    const statusOptions = text.find((el) => { return el.type === 'status' }).text
    const aboutOptions = text.find((el) => { return el.type === 'about' }).text
    const inspectOptions = text.find((el) => { return el.type === 'toknow' }).text

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

    return (
        <section className={`${aboutStyles.content}`}>
            <div className={`${aboutStyles.photo}`} />
            <div className={`${aboutStyles.text}`} >
                <h2 className={`text text_size_h3 ${`text_theme_${currTheme}`}`}>{name}</h2>
                <p className={`text text_size_h6 ${`text_theme_${currTheme}`}`}>{status}</p>
                <p className={`text text_size_h5 ${`text_theme_${currTheme}`} ${aboutStyles.about}`}>
                    {`" - ${about}"`}
                </p>
                <a href='#' className={`text text_size_h5 ${`nav-text_theme_${currTheme}`} link ${aboutStyles.link}`}>{inspect}</a>
            </div>
        </section>
    );
}

export default About;