export type FilmOptionsType = {
    id: number;
    value: string;
    label: string;
}

export type CheckboxType = {
    id: number;
    name: string;
    checked: boolean;
};

export type FiltersProperty = {
    OPTION: string;
    YEAR: string;
    DEFAULT_GENRES: CheckboxType[]
}

export const ACTION_TYPES = {
    FILTERS_RESET: 'filters-reset',
    SET_OPTION: 'set-option',
    SET_YEAR: 'set-year',
    SET_GENRES: 'set-genres'
}