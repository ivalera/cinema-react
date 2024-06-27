import { FiltersProperty } from '../filters/types';
import styles from './select-film.module.css'

type OptionsFilmType = {
    id: number;
    value: string;
    label: string;
}

export type SelectFilmProps = {
    title: string;
    options: OptionsFilmType[];
    selectedOption: string;
    selectedProperty: keyof FiltersProperty;
    selectOptionDefault: FiltersProperty;
    setSelect: React.Dispatch<React.SetStateAction<FiltersProperty>>;
}

export default function Select(
    {title, options, selectedOption, selectedProperty, selectOptionDefault, setSelect }: SelectFilmProps) {

    function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>, property: keyof FiltersProperty) {
        const selectedItem = event.target.value;
        setSelect({...selectOptionDefault, [property]: selectedItem});
    }

    return(
        <div className={styles['filters__select-wrapper']}>
            <label className={styles['filters__select-title']}>
                {title}
                <select 
                    className={styles['filters__select-option']}
                    value={selectedOption} 
                    onChange={event => handleOnChange(event, selectedProperty)}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}