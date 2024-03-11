import {Dispatch} from "redux";
import {useDispatch} from "react-redux";

const initState = {
    isLoading: false,
}
export const loadingReducer = (state = initState, action: LoadingActionType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export const loadingThunkCreator = (dispatch: Dispatch) => {
    dispatch(loadingAC(false))
}
