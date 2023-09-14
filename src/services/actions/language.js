const SWITCH_LANG = 'SWITCH_LANG';

const switchLang = (payload) => ({ type: SWITCH_LANG, lang: payload.lang })

export {SWITCH_LANG, switchLang };