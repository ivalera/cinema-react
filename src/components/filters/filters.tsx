import styles from "./filters.module.css"
import Button from "../button/button"
import Select from "../select/select-film"
import Pagination from "../pagination/pagination";
import { FILM_OPTIONS, FILM_OPTIONS_YEAR } from "./data/data";
import Checkbox from "../checkbox/checkbox";
import { useEffect, useState } from "react";
import { getGenresList } from "../../api/request-genre";
import { CheckboxType } from "./types";

let defaultGenres: CheckboxType[] = [];

export default function Filters() {
    const [genres, setGenres] = useState<CheckboxType[]>([]);

    useEffect(() => {
        dataGenresFetching();
      }, []);

    async function dataGenresFetching() {
        const data = await getGenresList();
        if(data){
            defaultGenres = data;
        }
        setGenres(data.map((genre: CheckboxType[]) => ({ 
            ...genre, 
            checked: false
        })));
    }


    return(
        <>
            <div className={styles['filters']}>
                <div className={styles['filters__wrapper-top']}>
                    <h1 className={styles['filter__title']}>Фильтры</h1>
                    <Button text={"x"}/>
                </div>
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Cортировать по" 
                        options={FILM_OPTIONS}/>
                </div> 
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Год релиза" 
                        options={FILM_OPTIONS_YEAR}/>
                </div>      
                <div className={styles['filters__genre']}>
                    <h1 className={styles['filter__title']}>Жанры</h1>
                    <Checkbox 
                        items={genres}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}