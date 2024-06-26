import styles from "./filters.module.css"
import Button from "../button/button"
import Select from "../select/select-film"
import Pagination from "../pagination/pagination";
import { FILM_OPTIONS, FILM_OPTIONS_YEAR } from "./data/data";
import Checkbox from "../checkbox/checkbox";
import { useEffect, useState } from "react";
import { getGenresList } from "../../api/request-genre";
import { CheckboxType, SelectOptionsType } from "./types";

let defaultGenres: CheckboxType[] = [];

const SELECT_DEFAULT = {
    OPTION: 'popular',
    YEAR: '1999',
};

export default function Filters() {
    const [genres, setGenres] = useState<CheckboxType[]>([]);
    const [selectedOption, setSelectedOption] = useState<SelectOptionsType>({
        selectOptions: SELECT_DEFAULT.OPTION,
        selectYear: SELECT_DEFAULT.YEAR
    });

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

    function handleFiltersReset() {
        setGenres(defaultGenres);
        setSelectedOption({
            selectOptions: SELECT_DEFAULT.OPTION,
            selectYear: SELECT_DEFAULT.YEAR
        });
    }

    function handleSelectChange(optionKey: keyof SelectOptionsType, value: string) {
        setSelectedOption(prev => ({
            ...prev,
            [optionKey]: value
        }));
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
                        options={FILM_OPTIONS}
                        selectedOption={selectedOption.selectOptions}
                        onChange={(value) => handleSelectChange('selectOptions', value)}/>
                </div> 
                <div className={styles['filters__select-film']}>
                    <Select
                        title="Год релиза" 
                        options={FILM_OPTIONS_YEAR}
                        selectedOption={selectedOption.selectYear}
                        onChange={(value) => handleSelectChange('selectYear', value)}/>
                </div>      
                <div className={styles['filters__genre']}>
                    <h1 className={styles['filter__title']}>Жанры</h1>
                    <Checkbox 
                        items={genres}
                        onChange={setGenres}/>
                </div>
                <Pagination/>
            </div>
        </>
    )
}