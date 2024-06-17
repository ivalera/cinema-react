import styles from './form-signup.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"

type FormLoginProps = {
    isVisible: boolean;
}

export default function FormSignup({isVisible}: FormLoginProps) {

    function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const targetForm = event.currentTarget;
        const formValue = new FormData(targetForm);
        const email = formValue.get('email');
        const password = formValue.get('password');

        targetForm.reset();

        console.log(`
            Пользователь успешно зарегестрирован
            Почта: ${email}
            Пароль: ${password}`);
    }

    return (
        isVisible &&
            <form onSubmit={onSignupSubmit} className={styles['form__login']}>
                <h1 className={styles['form__title']}>Signup Form</h1>
                <Input name='email' type='email' placaholderText='Email'></Input>
                <Input name='password' type='password' placaholderText='Password'></Input>
                <Button name='SIGNUP'></Button>
            </form>
    );
}