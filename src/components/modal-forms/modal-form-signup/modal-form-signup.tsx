import styles from './modal-form-signup.module.css';
import Button from "../../button/buttton"
import Input from "../../input/input"
import ModalAuthorization from '../modal-authorization/modal-authorization';
import { ChangeEvent, useState } from 'react';

type ModalFormLoginProps = {
    isVisible: boolean;
}

const EMPTY_VALUE = "";

export default function ModalFormSignup({isVisible}: ModalFormLoginProps) {

    const [email, setEmail] = useState(EMPTY_VALUE);
    const [password, setPassword] = useState(EMPTY_VALUE);

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }
    
    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function onSignupSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(`
            Пользователь успешно зарегестрирован
            Почта: ${email}
            Пароль: ${password}`);

        setEmail(EMPTY_VALUE);
        setPassword(EMPTY_VALUE);
    }

    return (
        <ModalAuthorization isVisible={isVisible} modalTitle='Signup Form'>
            <form onSubmit={onSignupSubmit} className={styles['form__login']}>
                <Input 
                    type='email' 
                    name='email' 
                    placaholderText='Email'
                    onChange={handleEmailChange}
                    value={email}
                    required={true}/>
                <Input 
                    type='password'
                    name='password' 
                    placaholderText='Password'
                    onChange={handlePasswordChange}
                    value={password}
                    required={true}/>
                <Button type='submit' text='SIGNUP'/>
            </form>
        </ModalAuthorization>
    );
}