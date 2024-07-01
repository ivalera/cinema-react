import Button from "../button/button"
import styles from "./header.module.css"

type HeaderProps = {
    onOpenModalFormLogin: React.MouseEventHandler<HTMLButtonElement>; 
}

export default function Header({onOpenModalFormLogin}: HeaderProps){
    return(
        <>
            <div className={styles['header']}>
                <h1 className={styles['header__title']}>Фильмы</h1>
                <Button text="Войти" onClick={onOpenModalFormLogin}/>
            </div>
        </>
    )
}