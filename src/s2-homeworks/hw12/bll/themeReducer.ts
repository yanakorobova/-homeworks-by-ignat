type ThemesType = {
    themeId: number
}

const initState: ThemesType = {
    themeId: 1,
}
type TChangeThemeId = {
    type: 'SET_THEME_ID'
    id: number
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

export const changeThemeId = (id: number): TChangeThemeId => ({type: 'SET_THEME_ID', id}) // fix any
