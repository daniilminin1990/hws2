import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const a = action.payload
            // const copyState = state.map(u => u)
            // return a === 'up'
            //     ? copyState.sort((x, y) => x.name.localeCompare(y.name))
            //     : copyState.sort((x, y) => y.name.localeCompare(x.name))
            const copyUp = [...state].sort((x, y) => {
                if (x.name > y.name) return 1
                if (x.name < y.name) return -1
                return 0
            })
            const copyDown = [...state].sort((x, y) => {
                if (x.name < y.name) return 1
                if (x.name > y.name) return -1
                return 0
            })
            return a === 'up' ? copyUp : copyDown
        }
        case 'check': {
            const a = action.payload
            return state.filter(u => u.age>=a && u)
        }
        default:
            return state
    }
}
