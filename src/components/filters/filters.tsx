import styles from "./filters.module.css"
import Button from "../button/button"
import Select from "../select/select-film"
import Pagination from "../pagination/pagination";
import { FILM_OPTIONS, FILM_GENRES } from "./data/data";
import Checkbox from "../checkbox/checkbox";

export default function Filters() {
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
                <div className={styles['filters__genre']}>
                    <h1 className={styles['filter__title']}>Жанры</h1>
                    <Checkbox 
                        items={FILM_GENRES}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}