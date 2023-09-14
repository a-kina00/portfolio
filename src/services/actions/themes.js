const SWITCH_THEME = 'SWITCH_THEME';

const switchTheme = (payload) => ({ type: SWITCH_THEME, theme: payload.theme })

export {SWITCH_THEME, switchTheme };