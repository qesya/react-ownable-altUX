// @ts-ignore
export const pageReducer = (state, action) => {
    switch (action.type) {
        case 'add-favorite':
            return {
                ...state,
                favoriteListId: [
                    ...state.favoriteListId,
                    action.value
                ]
            }
        case 'remove-favorite':
            const newList = state.favoriteListId.filter((id: number) => id !== action.value)
            return {
                ...state,
                favoriteListId: newList
            }
        case 'set-selected-page':
            return {
                ...state,
                selectedPage: action.value
            }
        default:
            return state
    }
}
