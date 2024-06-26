import { ChangeEvent, useState } from "react";
import styles from "./checkbox.module.css"
import { CheckboxType } from "../filters/types";

interface CheckboxProps {
    items: CheckboxType[];
}

export default function CheckboxElements({items}: CheckboxProps) {
    
    const [checkedItems, setCheсkedItems] = useState<CheckboxType[]>(items);

    function handleChangeItem(event: ChangeEvent<HTMLInputElement>, id: number) {
        const { checked } = event.target;
        setCheсkedItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, checked: checked } : item
            )
        );    
    }

    return (
        <div className={styles['filters__genre-wrapper']}>
           <ul className={styles['filters__genre-list']}>
                {checkedItems.map((item) => (
                    <li key={item.id}>
                    <label className={styles['filters__genre-element']}>
                        <input
                            className={styles['filters__genre-checkbox']}
                            type="checkbox"
                            name={item.id.toString()}
                            checked={item.checked}
                            onChange={(e) => handleChangeItem(e, item.id)}/>
                        {item.name}
                    </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}