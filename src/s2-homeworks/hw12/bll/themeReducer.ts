type ThemesType = {
    themeId: number
}

const initState: ThemesType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeId>): ThemesType => { // fix any
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

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id}) // fix any
