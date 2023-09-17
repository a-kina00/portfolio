import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { motion } from "framer-motion"

import { openModal } from '../../../../services/actions/modal'

import projectStyles from './project.module.css'

function Project({ props }) {
    const dispatch = useDispatch();
    const ref = React.useRef();

    const hoverSettings = {
        scale: 1.1,
        x: "0",
        y: "0",
        zIndex: "4",
    }

    const [currPosition, setCurrPosition] = React.useState({})

    React.useEffect(() => {
        setCurrPosition(ref.current.getBoundingClientRect())
    }, []);

    React.useEffect(() => {
        let result = {
            width: (currPosition.width * hoverSettings.scale - currPosition.width) / 2,
            height: (currPosition.height * hoverSettings.scale - currPosition.height) / 2,
        }

        hoverSettings.x = currPosition.left + result.width * 4 < window.screen.width / 2 ? result.width + 5 : result.width * -1 - 5 + 'px'
        hoverSettings.y = currPosition.top + result.height * 2 < window.screen.height / 2 ? result.height : result.height * -1 + 'px'

        if (currPosition.width > window.screen.width / 2) hoverSettings.width = currPosition.width * 0.85 + 'px'

    }, [currPosition]);

    function handelOpening() {
        dispatch(openModal({ content: props }))
    }

    return (
        <motion.div className={`${projectStyles.project}`}
            style={{
                backgroundImage: `url(${props.background})`
            }}
            whileHover={hoverSettings}
            whileTap={{
                scale: 1
            }}
            ref={ref}
            onClick={handelOpening}>

            {props.gh_pages ? <motion.a href={props.gh_pages}
                target='blank'
                className={`${projectStyles.icon}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} /> : <></>}

            <h2 className={`text text_theme_dark text_size_h4 ${projectStyles.title}`}>{props.title}</h2>
            <div className={`${projectStyles.bg}`} />
            <div className={`${projectStyles.technologies}`}>
                {props.technologies.map((el, index) => (
                    <motion.div className={`${projectStyles.tech} text text_theme_light`} key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title='asss'>{el}</motion.div>))}
            </div>
        </motion.div>
    );
}

export default Project;