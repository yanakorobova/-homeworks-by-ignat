type ThemesType = {
    themeId: string
}

const initState: ThemesType = {
    themeId: '1',
}
type TChangeThemeId = {
    type: 'SET_THEME_ID'
    id: string
}


export const themeReducer = (state = initState, action: TChangeThemeId): ThemesType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export const changeThemeId = (id: string): TChangeThemeId => ({type: 'SET_THEME_ID', id}) // fix any