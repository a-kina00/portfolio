import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion"

import { closeModal } from '../../services/actions/modal';

import modalStyles from './modal.module.css'

function Modal() {
    const dispatch = useDispatch();

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currState } = useSelector((state) => ({ currState: state.modal }), shallowEqual);

    const textOptions = text.find((el) => { return el.type === 'project' }).text

    React.useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                dispatch(closeModal())
            }
            dispatch(closeModal())
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    }, []);

    if (currState.modalIsVisible)
        return (
            <div className={`${modalStyles.content}`}>
                <div className={`${modalStyles.window} ${modalStyles[`window_theme_${currTheme}`]}`}>

                    <motion.div className={`${modalStyles.cross}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => (dispatch(closeModal()))} />

                    <div className={`${modalStyles.text}`}>
                        <h2 className={`text text_size_h2 ${`text_theme_${currTheme}`}`}>{currState.modalContent.title}</h2>
                        <div className={`${modalStyles.technologies}`}>
                            {currState.modalContent.technologies.map((el, index) => {
                                return <p className={`text text_size_h7 ${`text_theme_${currTheme}`}`} key={index}>{el}</p>
                            })}
                        </div>
                        <p className={`text text_size_h5 ${`text_theme_${currTheme} ${modalStyles.about__heading}`}`}>{textOptions[currLang][0]}</p>
                        <p className={`text text_size_h6 ${`text_theme_${currTheme} ${modalStyles.about}`}`}>{currState.modalContent.about[currLang]}</p>
                        <motion.a className={`${modalStyles.icon} ${modalStyles[`icon_theme_${currTheme}`]}`}
                            href={currState.modalContent.gh}
                            target='blank'
                            title='GitHub'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} />
                    </div>
                    <div className={`${modalStyles.video_section}`}>
                        <video className={`${modalStyles.video}`} autoPlay muted loop>
                            <source src={currState.modalContent.video} type="video/mp4" />
                        </video>
                    </div>
                    {currState.modalContent.gh_pages ?
                        <motion.a className={`button ${modalStyles.btn__try} ${modalStyles[`icon_theme_${currTheme}`]} text text_size_h4 ${`text_theme_${currTheme}`} ${modalStyles[`btn__try_theme_${currTheme}`]}`}
                            href={currState.modalContent.gh_pages}
                            target='blank'
                            title='GitHub'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}> TRY </motion.a> : <></>}
                </div>
                <div className={`${modalStyles.background} ${modalStyles[`background_theme_${currTheme}`]}`}
                    onClick={() => (dispatch(closeModal()))}></div>
            </div>
        );
}

export default Modal;