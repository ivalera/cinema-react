import { FilmSelectType } from "../types";

const filmCriterias: FilmSelectType[] = [
    {id: 1, value: 'popular', label: 'Популярности' },
    {id: 2, value: 'year', label: 'Году' },
    {id: 3, value: 'rating', label: 'Рейтингу' },
];

const filmYears: FilmSelectType[] = [
    {id: 1, value: '1999', label: '1999' },
    {id: 2, value: '2000', label: '2000' },
    {id: 3, value: '2001', label: '2001' },
    {id: 4, value: '2002', label: '2002' },
    {id: 5, value: '2003', label: '2003' },
    {id: 6, value: '2004', label: '2004' },
    {id: 7, value: '2005', label: '2005' },
    {id: 8, value: '2006', label: '2006' },
    {id: 9, value: '2007', label: '2007' },
]

export interface FilmCritreiasYears {
    filmCriterias: FilmSelectType[];
    filmYears: FilmSelectType[];
}

export const filmCritreiasYears = {filmCriterias, filmYears};
