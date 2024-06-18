import styles from './input.module.css'
import { InputProps } from './types';

function Input({name, type, placaholderText, required}: InputProps) {
    return (
        <input 
            className={styles['input']} 
            type={type ?? 'text'} 
            name={name}
            placeholder={placaholderText}
            required={required}
        />
    );
}

export default Input;