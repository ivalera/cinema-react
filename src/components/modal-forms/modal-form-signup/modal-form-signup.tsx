import styles from './modal-form-signup.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';
import { ChangeEvent, useState } from 'react';

type ModalFormLoginProps = {
    isVisible: boolean;
}

interface ICredential {
    email : string,
    password: string
}

const EMPTY_VALUE = "";

const INITIAL_CREDENTIAL: ICredential = {
	email : EMPTY_VALUE,
	password : EMPTY_VALUE
}

export default function ModalFormSignup({isVisible}: ModalFormLoginProps) {

    const [credential, setCredential] = useState(INITIAL_CREDENTIAL);


    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setCredential({
            ...credential,
            email: e.target.value}
        );
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setCredential({
            ...credential,
            password: e.target.value}
        );
    }

    function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(`
            Пользователь успешно зарегестрирован
            Почта: ${credential.email}
            Пароль: ${credential.password}`);

        setCredential(INITIAL_CREDENTIAL);
    }

    return (
        <ModalAuthorization isVisible={isVisible} modalTitle='Signup Form'>
            <form onSubmit={onSignupSubmit} className={styles['form__login']}>
                <Input 
                    type='email' 
                    name='email' 
                    placaholderText='Email'
                    onChange={handleEmailChange}
                    value={credential.email}
                    required={true}/>
                <Input 
                    type='password'
                    name='password' 
                    placaholderText='Password'
                    onChange={handlePasswordChange}
                    value={credential.password}
                    required={true}/>
                <Button type='submit' text='SIGNUP'/>
            </form>
        </ModalAuthorization>
    );
}