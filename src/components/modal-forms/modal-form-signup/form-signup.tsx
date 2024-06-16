import styles from './form-signup.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"

type FormLoginProps = {
    isVisible: boolean
}

export default function FormSignup({isVisible}: FormLoginProps){
    return(
        isVisible &&
            <form className={styles['form__login']}>
                <h1 className={styles['form__title']}>Signup Form</h1>
                <Input type='email' placaholderText='Email'></Input>
                <Input type='password' placaholderText='Password'></Input>
                <Button  name='SIGNUP'></Button>
            </form>
    )
}