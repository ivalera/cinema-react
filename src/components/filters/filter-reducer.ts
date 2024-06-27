import { FiltersAction } from "./filters";
import { ACTION_TYPES, FiltersProperty } from "./types";

export function filtersReducer(state: FiltersProperty, action: FiltersAction)   {
    switch(action.type) {
        case ACTION_TYPES.FILTERS_RESET:
            return {
                ...state,
                OPTION: 'popular',
                YEAR: '1999',
                DEFAULT_GENRES: state.DEFAULT_GENRES.map(genre => ({ ...genre, checked: false }))
                
            };
        case ACTION_TYPES.SET_OPTION:
            return { ...state, OPTION: action.OPTION };
        case ACTION_TYPES.SET_YEAR:
            return { ...state, YEAR: action.YEAR };
        case ACTION_TYPES.SET_GENRES:
            return { ...state, DEFAULT_GENRES: action.DEFAULT_GENRES };
        default:
            return state;
    }
}