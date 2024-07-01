import styles from "./filters.module.css"
import Button from "../button/button"
import Select from "../select/select-film"
import Pagination from "../pagination/pagination";
import Checkbox from "../checkbox/checkbox";
import { 
    INITIAL_CRITERIA_YEAR, 
    useCriteriaYear, 
    useCriteriaYearContent, 
    useCriteriaYearDispatch, 
    useGenresContext 
} from "./filters-context";
import { useState } from "react";
import { GenresType } from "./types";

export default function Filters() { 

    const dispatch = useCriteriaYearDispatch() ?? (() => {});
    const criteriasYears = useCriteriaYear() ?? INITIAL_CRITERIA_YEAR;
    const genres = useGenresContext() ?? [];
    const criteriasYearsContent = useCriteriaYearContent() ?? [];

    const initialGenres = genres.map(genre => ({ ...genre, checked: false }));
    
    const [genresChecked, setGenresChecked] = useState(initialGenres);

    function criteriasYearsReset(){
        dispatch({
            type: 'RESET_CRITERIA_YEAR',
            initialCriteria: 'popolar',
            initialYear: '1999'
          });
    }

    function handleFiltersReset() {
        criteriasYearsReset();
        setGenresChecked(initialGenres);
    }

    function handleCriteriaChange(event: React.ChangeEvent<{ value: string }>) {
        dispatch({ type: 'CRITERIA', criteria: event.target.value });
    }

    function handleYearChange(event: React.ChangeEvent<{ value: string }>) {
        dispatch({ type: 'YEAR', year: event.target.value });
    }

    function handleGenresChange(genres: GenresType[]) {
        setGenresChecked(genres);
    }

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
                        options={criteriasYearsContent.filmCriterias}
                        selectedOption={criteriasYears.criteria}
                        handleOnChange={handleCriteriaChange}/>
                </div> 
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Год релиза" 
                        options={criteriasYearsContent.filmYears}
                        selectedOption={criteriasYears.year}
                        handleOnChange={handleYearChange}/>
                </div>   
                <div className={styles['filters__genre']}>
                    <h1 className={styles['filter__title']}>Жанры</h1>
                    <Checkbox 
                        items={genresChecked}
                        onChange={handleGenresChange}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}