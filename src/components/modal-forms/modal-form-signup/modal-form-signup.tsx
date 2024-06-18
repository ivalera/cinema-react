import styles from './modal-form-signup.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';

type ModalFormLoginProps = {
    isVisible: boolean;
}

export default function ModalFormSignup({isVisible}: ModalFormLoginProps) {

    function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const targetForm = event.currentTarget;
        const email = targetForm.email.value;
        const password = targetForm.password.value;

        targetForm.reset();

        console.log(`
            Пользователь успешно зарегестрирован
            Почта: ${email}
            Пароль: ${password}`);
    }

    return (
        <ModalAuthorization isVisible={isVisible} modalTitle='Signup Form'>
            <form onSubmit={onSignupSubmit} className={styles['form__login']}>
                <Input type='email' name='email' placaholderText='Email'/>
                <Input type='password' name='password' placaholderText='Password'/>
                <Button type='submit' text='SIGNUP'/>
            </form>
        </ModalAuthorization>
    );
}