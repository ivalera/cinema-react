import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import { FilmCritreiasYears, filmCritreiasYears } from './data/data';
import { GenresType } from './types';
import { genresFromRequest } from '../../api/request-genres';

interface CriteriaAction {
    type: 'CRITERIA';
    criteria: string;
}

interface YearAction {
    type: 'YEAR';
    year: string;
}

interface ResetCriteriaYearAction {
    type: 'RESET_CRITERIA_YEAR';
    initialCriteria: string;
    initialYear: string;
}

type CriteriaYearAction = CriteriaAction | YearAction | ResetCriteriaYearAction;

interface InitialCriteriaYearType {
    criteria: string;
    year: string;
}
 
const INITIAL_CRITERIA_YEAR: InitialCriteriaYearType = {
    criteria: 'popular',
    year: '1999',   
};

const CriteriaYearContext = createContext<InitialCriteriaYearType>(INITIAL_CRITERIA_YEAR);
const CriteriaYearDispatchContext = createContext<Dispatch<CriteriaYearAction> | null>(null);
const CriteriaYearContentContext = createContext<FilmCritreiasYears>(filmCritreiasYears);
const GenresContext = createContext<GenresType[]>([]);

function FiltersProvider({ children }: { children: React.ReactNode }) {
    const [criteriaYear, dispatch] = useReducer(criteriaYearReducer, INITIAL_CRITERIA_YEAR);
  
    return (
        <CriteriaYearContext.Provider value={criteriaYear}>
            <CriteriaYearDispatchContext.Provider value={dispatch}>
                <GenresContext.Provider value={genresFromRequest}>
                    <CriteriaYearContentContext.Provider value={filmCritreiasYears}>
                        {children}
                    </CriteriaYearContentContext.Provider>
                </GenresContext.Provider>
            </CriteriaYearDispatchContext.Provider>
        </CriteriaYearContext.Provider>
    );
}

function useCriteriaYear() {
    return useContext(CriteriaYearContext);
}

function useCriteriaYearDispatch() {
    return useContext(CriteriaYearDispatchContext);
}

function useCriteriaYearContent() {
    return useContext(CriteriaYearContentContext);
}

function useGenresContext() {
    return useContext(GenresContext);
}

function criteriaYearReducer(state: InitialCriteriaYearType, action: CriteriaYearAction) {
    switch(action.type) {
        case 'CRITERIA':
            return { 
                ...state, 
                criteria: action.criteria 
            };
        case 'YEAR':
            return { 
                ...state, 
                year: action.year 
            };
        case 'RESET_CRITERIA_YEAR':
            return { 
                ...state, 
                criteria: action.initialCriteria, 
                year: action.initialYear
            };
        default:
            return state;
    }
}

export { 
    INITIAL_CRITERIA_YEAR, 
    FiltersProvider, 
    useCriteriaYear, 
    useCriteriaYearDispatch, 
    useCriteriaYearContent, 
    useGenresContext 
}