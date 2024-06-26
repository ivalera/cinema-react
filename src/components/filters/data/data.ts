import { CheckboxType, FilmOptionsType } from "../types";

export const FILM_OPTIONS: FilmOptionsType[] = [
    {id: 1, value: 'popular', label: 'Популярности' },
    {id: 2, value: 'year', label: 'Году' },
    {id: 3, value: 'rating', label: 'Рейтингу' },
];

export const FILM_GENRES: CheckboxType[] = [
    {id: 1, name: 'Комедия', checked: true},
    {id: 2, name: 'Боевик', checked: false},
    {id: 3, name: 'Драма', checked: false},
];