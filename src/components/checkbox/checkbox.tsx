import styles from "./checkbox.module.css"
import { CheckboxType } from "../filters/types";

interface CheckboxProps {
    items: CheckboxType[];
    onChange: (updatedItems: CheckboxType[]) => void;
}

export default function CheckboxElements({items, onChange}: CheckboxProps) {

    function handleChangeItem(id: number) {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        onChange(updatedItems);
    }

    return (
        <div className={styles['filters__genre-wrapper']}>
           <ul className={styles['filters__genre-list']}>
                {items.map((item) => (
                    <li key={item.id}>
                    <label className={styles['filters__genre-element']}>
                        <input
                            className={styles['filters__genre-checkbox']}
                            type="checkbox"
                            name={item.id.toString()}
                            checked={item.checked}
                            onChange={() => handleChangeItem(item.id)}/>
                        {item.name}
                    </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}