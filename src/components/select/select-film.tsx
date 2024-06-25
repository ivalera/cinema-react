import { useState } from 'react';
import styles from './select-film.module.css'

type OptionsFilmType = {
    id: number;
    value: string;
    label: string;
}

export type SelectFilmProps = {
    title: string;
    options: OptionsFilmType[];
}

export default function Select({title, options}: SelectFilmProps) {
    const [selectOption, setSelectOption] = useState("");

    function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectOption(event.target.value);
    }

    return(
        <div className={styles['filters__select-wrapper']}>
            <label className={styles['filters__select-title']}>
                {title}
                <select 
                    className={styles['filters__select-option']}
                    value={selectOption} 
                    onChange={handleOnChange}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}