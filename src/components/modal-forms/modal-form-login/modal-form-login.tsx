import styles from './modal-form-login.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';
import { ChangeEvent, useState } from 'react';

type ModalFormLoginProps = {
    isVisible: boolean;
}

const EMPTY_VALUE = "";

export default function ModalFormLogin({isVisible}: ModalFormLoginProps) {

    const [login, setLogin] = useState(EMPTY_VALUE);
    const [password, setPassword] = useState(EMPTY_VALUE);

    function handleLoginChange(e: ChangeEvent<HTMLInputElement>) {
        setLogin(e.target.value);
    }
    
    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        console.log(`
            Пользователь успешно авторизован
            Логин: ${login}
            Пароль: ${password}`
        );

        setLogin(EMPTY_VALUE);
        setPassword(EMPTY_VALUE);
    } 

    return (
        <ModalAuthorization isVisible={isVisible} modalTitle='Login Form'>
            <form onSubmit={onLoginSubmit} className={styles['form__login']}>
                <Input 
                    type='text' 
                    name='login' 
                    placaholderText='Username'
                    onChange={handleLoginChange}
                    value={login}
                    required={true}/>
                <Input 
                    type='password' 
                    name='password' 
                    placaholderText='Password' 
                    onChange={handlePasswordChange}
                    value={password}
                    required={true}/>
                <Button type='submit' text='LOGIN'/>
            </form>
        </ModalAuthorization>    
    );
}