import styles from "./filters.module.css"
import Button from "../button/button"
import Select from "../select/select-film"
import Pagination from "../pagination/pagination";
import { FILM_OPTIONS, FILM_OPTIONS_YEAR } from "./data/data";
import Checkbox from "../checkbox/checkbox";
import { useEffect, useReducer } from "react";
import { getGenresList } from "../../api/request-genre";
import { ACTION_TYPES, CheckboxType, FiltersProperty } from "./types";
import { FILTERS_GENRES_KEY, loadFromLocalStorage, saveToLocalStorage } from "../../tools/local-storage/local-storage";
import { filtersReducer } from "./filter-reducer";

let FILTERS_DEFAULT: FiltersProperty = {
    OPTION: 'popular',
    YEAR: '1999',
    DEFAULT_GENRES: []
};

export interface FiltersAction{
    type: string;
    OPTION?: string;
    YEAR?: string;
    DEFAULT_GENRES?: CheckboxType[];
}

export default function Filters() {
    const [state, dispatch] = useReducer(filtersReducer, FILTERS_DEFAULT);

    useEffect(() => {
        const storedGenres = loadFromLocalStorage(FILTERS_GENRES_KEY);
        if (storedGenres) {
            dispatch({ type: ACTION_TYPES.SET_GENRES, DEFAULT_GENRES: storedGenres });
        } else {
            dataGenresFetching();
        }
      }, []);

      async function dataGenresFetching() {
        try {   
            const data = await getGenresList();
            if (data) { 
                const updatedGenres = data.map((genre: CheckboxType) => ({
                    ...genre,
                    checked: false
                }));
                dispatch({ type: ACTION_TYPES.SET_GENRES, DEFAULT_GENRES: updatedGenres });
                saveToLocalStorage(FILTERS_GENRES_KEY, updatedGenres);
            }
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    }

    function handleFiltersReset() {
        dispatch({ type: ACTION_TYPES.FILTERS_RESET });
        saveToLocalStorage(FILTERS_GENRES_KEY, state.DEFAULT_GENRES.map((genre: CheckboxType) => ({ ...genre, checked: false })));
    }

    function handleOptionChange(value: string) {
        dispatch({ type: ACTION_TYPES.SET_OPTION, OPTION: value.OPTION });
    }

    function handleYearChange(value: string) {
        dispatch({ type: ACTION_TYPES.SET_YEAR, YEAR: value.YEAR });
    }

    function handleGenresChange(updatedGenres: CheckboxType[]) {
        dispatch({ type: ACTION_TYPES.SET_GENRES, DEFAULT_GENRES: updatedGenres });
        saveToLocalStorage(FILTERS_GENRES_KEY, updatedGenres);
    }


    console.log(state);

    return(
        <>
            <div className={styles['filters']}>
                <div className={styles['filters__wrapper-top']}>
                    <h1 className={styles['filter__title']}>Фильтры</h1>
                    <Button text={"x"} onClick={handleFiltersReset}/>
                </div>
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Cортировать по" 
                        options={FILM_OPTIONS}
                        selectedOption={state.OPTION}
                        selectedProperty={'OPTION'}
                        selectOptionDefault={state}
                        setSelect={handleOptionChange}/>
                </div> 
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Год релиза" 
                        options={FILM_OPTIONS_YEAR}
                        selectedOption={state.YEAR}
                        selectedProperty={'YEAR'}
                        selectOptionDefault={state}
                        setSelect={handleYearChange}/>
                </div>   
                <div className={styles['filters__genre']}>
                    <h1 className={styles['filter__title']}>Жанры</h1>
                    <Checkbox 
                        items={state.DEFAULT_GENRES}
                        onChange={handleGenresChange}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}