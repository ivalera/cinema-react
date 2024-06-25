import Button from "../button/button"
import styles from "./header.module.css"

export default function Header(){
    return(
        <>
            <div className={styles['header']}>
                <h1 className={styles['header__title']}>Фильмы</h1>
                <Button text="Войти"/>
            </div>
        </>
    )
}