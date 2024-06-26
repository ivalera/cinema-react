import { useState } from "react";
import styles from "./checkbox.module.css"
import { CheckboxType } from "../filters/types";

interface CheckboxProps {
    items: CheckboxType[];
}

export default function CheckboxElements({items}: CheckboxProps) {
    const [checkedItemsId, setCheсkedItemsId] = useState<number[]>([]);

    function handleChangeItem(id: number) {
        setCheсkedItemsId(prevState => {
            if (prevState.includes(id)) {
              return prevState.filter(itemId => itemId !== id);
            } else {
              return [...prevState, id];
            }
          });
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
                            checked={checkedItemsId.includes(item.id)}
                            onChange={() => handleChangeItem(item.id)}/>
                        {item.name}
                    </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}