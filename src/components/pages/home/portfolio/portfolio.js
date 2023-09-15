import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Project from '../project/project';

import portfolioStyles from './portfolio.module.css'

function Portfolio() {

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { projects } = useSelector((state) => ({ projects: state.projects }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

    return (
        <div id='1' className={`${portfolioStyles.content} 
        ${portfolioStyles[`content_theme_${currTheme}`]}`}>
            {projects.map((el, index) => {
                return <Project key={index} props={el} />
            })}
        </div>
    );
}

export default Portfolio;