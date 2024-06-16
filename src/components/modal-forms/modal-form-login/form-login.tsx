import styles from './form-login.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"

type FormLoginProps = {
    isVisible: boolean
}

export default function FormLogin({isVisible}: FormLoginProps){
    return(
        isVisible &&
            <form className={styles['form__login']}>
                <h1 className={styles['form__title']}>Login Form</h1>
                <Input placaholderText="Username"></Input>
                <Input type="password" placaholderText="Password"></Input>
                <Button  name="LOGIN"></Button>
            </form>
    )
}