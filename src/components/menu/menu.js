import React from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { switchLang } from '../../services/actions/language';
import { switchTheme } from '../../services/actions/themes';

import menuStyles from './menu.module.css'
import '../App.css'

function Menu() {
    const dispatch = useDispatch();

    const { text } = useSelector((state) => ({ text: state.text }), shallowEqual);
    const { currLang } = useSelector((state) => ({ currLang: state.currLang }), shallowEqual);
    const { currTheme } = useSelector((state) => ({ currTheme: state.currTheme }), shallowEqual);

    const menuText = text.find((el) => { return el.type === 'menu' }).text

    function changeLang(lang) {
        dispatch(switchLang({ lang: lang }))
    }

    function changeTheme() {
        switch (currTheme) {
            case 'light': 
                dispatch(switchTheme({ theme: 'dark' }))
                return;
            case 'dark': 
                dispatch(switchTheme({ theme: 'light' }))
                return;
            default: break;
        }
    }

    return (
        <div className={`${menuStyles.menu} ${menuStyles[`menu_theme_${currTheme}`]} ${`text_theme_${currTheme}`}`}>
            <div className={`${menuStyles.content}`}>
                <div>
                    <p className={`text text_size_h6`} onClick={changeTheme}>theme</p>
                </div>
                <nav className={`${menuStyles.navigation}`}>
                    {menuText[currLang].map((el, index) => {
                        return <a href='#' key={index} className={`link text text_size_h6 ${`text_theme_${currTheme}`}`}>{el}</a>
                    })}

                </nav>
                <div className={`${menuStyles.language} ${`text_theme_${currTheme}`}`}>
                    <p className={`${currLang === 'ru' ? menuStyles.active : menuStyles.clickable} text text_size_h6`} onClick={() => changeLang('ru')}>Rus</p>
                    <p className={`text text_size_h6`}>/</p>
                    <p className={`${currLang === 'eng' ? menuStyles.active : menuStyles.clickable} text text_size_h6`} onClick={() => changeLang('eng')}>Eng</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;