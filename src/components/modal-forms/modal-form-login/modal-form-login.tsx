import styles from './modal-form-login.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';

type ModalFormLoginProps = {
    isVisible: boolean;
}

export default function ModalFormLogin({isVisible}: ModalFormLoginProps) {

    function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const targetForm = event.currentTarget;
        const login = targetForm.login.value;
        const password = targetForm.password.value;

        targetForm.reset();

        console.log(`
            Пользователь успешно авторизован
            Логин: ${login}
            Пароль: ${password}`
        );
    } 

    return (
        <ModalAuthorization isVisible={isVisible} modalTitle='Login Form'>
            <form onSubmit={onLoginSubmit} className={styles['form__login']}>
                <Input type='text' name='login' placaholderText='Username'/>
                <Input type='password' name='password' placaholderText='Password'/>
                <Button type='submit' text='LOGIN'/>
            </form>
        </ModalAuthorization>    
    );
}