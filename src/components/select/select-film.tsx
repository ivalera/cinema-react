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
    handleOnChange: (event: React.ChangeEvent<{ value: string }>) => void;
}

export default function Select(
    {title, options, selectedOption, handleOnChange }: SelectFilmProps) {
    

    return(
        <div className={styles['filters__select-wrapper']}>
            <label className={styles['filters__select-title']}>
                {title}
                <select 
                    className={styles['filters__select-option']}
                    value={selectedOption} 
                    onChange={handleOnChange}>
                    {options.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}