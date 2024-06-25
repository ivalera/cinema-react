import { ChangeEvent, useState } from "react";
import styles from "./checkbox.module.css"
import { CheckboxType } from "../filters/types";

interface CheckboxProps {
    items: CheckboxType[];
}

export default function CheckboxElements({items}: CheckboxProps) {
    const [checkedItems, setChekedItems] = useState<number[]>([]);

    function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, checked } = event.target;
        const id = Number(name);
        if (checked) {
          setChekedItems([...checkedItems, id]);
        } else {
          setChekedItems(checkedItems.filter(item => item !== id));
        }
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
                            checked={checkedItems.includes(item.id)}
                            onChange={handleCheckboxChange}/>
                        {item.name}
                    </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}