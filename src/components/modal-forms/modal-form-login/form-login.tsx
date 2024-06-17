import styles from './form-login.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"

type FormLoginProps = {
    isVisible: boolean;
}

export default function FormLogin({isVisible}: FormLoginProps) {

    function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const targetForm = event.currentTarget;
        const formValue = new FormData(targetForm);
        const login = formValue.get('login');
        const password = formValue.get('password');

        targetForm.reset();

        console.log(`
            Пользователь успешно авторизован
            Логин: ${login}
            Пароль: ${password}`
        );
    } 

    return (
        isVisible &&
            <form onSubmit={onLoginSubmit} className={styles['form__login']}>
                <h1 className={styles['form__title']}>Login Form</h1>
                <Input name='login' placaholderText='Username'></Input>
                <Input name='password' type='password' placaholderText='Password'></Input>
                <Button name='LOGIN'></Button>
            </form>
    );
}