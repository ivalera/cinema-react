import { SelectOptionsType } from '../filters/types';
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
    selectedProperty: string;
    selectOptionDefault: SelectOptionsType;
    setSelect: React.Dispatch<React.SetStateAction<SelectOptionsType>>;
}

export default function Select(
    {title, options, selectedOption, selectedProperty, selectOptionDefault, setSelect }: SelectFilmProps) {

    function handleOnChange(event: React.ChangeEvent<HTMLSelectElement>,property: keyof SelectOptionsType) {
        const selectedItem = event.target.value;
        const updatedSelectedItem = {...selectOptionDefault, [property]: selectedItem,};
        setSelect(updatedSelectedItem);
    }

    return(
        <div className={styles['filters__select-wrapper']}>
            <label className={styles['filters__select-title']}>
                {title}
                <select 
                    className={styles['filters__select-option']}
                    value={selectedOption} 
                    onChange={event => handleOnChange(event, selectedProperty as keyof SelectOptionsType)}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}