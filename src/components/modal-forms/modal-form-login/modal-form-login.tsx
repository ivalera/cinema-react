import styles from './modal-form-login.module.css';
import Button from "../../button/button"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';
import { ChangeEvent, useState } from 'react';

type ModalFormLoginProps = {
    isVisible: boolean;
}

interface ICredential {
    login : string,
    password: string
}

const EMPTY_VALUE = "";

const INITIAL_CREDENTIAL: ICredential = {
	login : EMPTY_VALUE,
	password : EMPTY_VALUE
}

export default function ModalFormLogin({isVisible}: ModalFormLoginProps) {

    const [credential, setCredential] = useState(INITIAL_CREDENTIAL);

    function handleLoginChange(e: ChangeEvent<HTMLInputElement>) {
        setCredential({
            ...credential,
            login: e.target.value
        });
    }
    
    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setCredential({
            ...credential,
            password: e.target.value
        });
    }

    function onLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        console.log(`
            Пользователь успешно авторизован
            Логин: ${credential.login}
            Пароль: ${credential.password}`
        );

        setCredential(INITIAL_CREDENTIAL)
    } 

    return (
        <ModalAuthorization isVisibleModal={isVisible} modalTitle='Login Form'>
            <form onSubmit={onLoginSubmit} className={styles['form__login']}>
                <Input 
                    type='text' 
                    name='login' 
                    placaholderText='Username'
                    onChange={handleLoginChange}
                    value={credential.login}
                    required={true}/>
                <Input 
                    type='password' 
                    name='password' 
                    placaholderText='Password' 
                    onChange={handlePasswordChange}
                    value={credential.password}
                    required={true}/>
                <Button type='submit' text='LOGIN'/>
            </form>
        </ModalAuthorization>    
    );
}