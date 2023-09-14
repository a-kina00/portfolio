import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import lottie from 'lottie-web'

import headingStyles from './heading.module.css'

function Heading(props) {
    let gitIcon = React.createRef()

    const dispatch = useDispatch();

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

    const textOptions = text.find((el) => { return el.type === 'header' }).text
    const buttonText = text.find((el) => { return el.type === 'contact-button' }).text
    const [intro, setIntro] = React.useState(textOptions[currLang])

    React.useEffect(() => {
        setIntro(textOptions[currLang])
    }, [currLang])

    React.useEffect(() => {
        lottie.loadAnimation({
            container: gitIcon.current,
            animationData: props.gitIcon
        }).setSpeed(.5)
    }, [])

    return (<>
        <section className={`${headingStyles.content} ${headingStyles[`content_theme_${currTheme}`]} text ${`text_theme_${currTheme}`}`}>
            <div className={`${headingStyles.content__top}`}>
                <p className={`text text_size_h6 float_right float_delay_three`}>{'<body>'}</p>
                <p className={`text text_size_h5 float_right float_delay_two ${headingStyles.h1}`}>{'<h1>'}</p>
                <div className={`${headingStyles.intro}`}>
                    <p className={`text text_size_h1 float_right`}>
                        {props.separateSentence(intro)[0]}
                    </p>
                    <p className={`text text_size_h3 float_up ${headingStyles.right}`}>
                        {props.separateSentence(intro).slice(1, props.separateSentence(intro).lenght)}
                    </p>
                </div>
                <p className={`text text_size_h5 float_right float_delay_two ${headingStyles.h1}`}>{'</h1>'}</p>
                <p className={`text text_size_h6 float_right float_delay_three`}>{'</body>'}</p>
            </div>
            <div className={`${headingStyles.content__buttom}`}>
                <button className={`button ${`button_theme_${currTheme}`} text text_size_h5 text_theme_dark`}>
                    {buttonText[currLang]}
                </button>
                <ul className={`${headingStyles.socials}`}>
                    <a href='https://github.com/a-kina00' target="blank" className={`${headingStyles.socials__social} 
                    ${currTheme === 'light' ? headingStyles.socials__social_theme_light : headingStyles.socials__social_theme_dark}`}
                        ref={gitIcon} />
                </ul>
            </div>
        </section>
        <div className={`${headingStyles.background}
        ${currTheme === 'light' ? headingStyles.background_theme_light : headingStyles.background_theme_dark}`} />
    </>
    )
}

export default Heading;