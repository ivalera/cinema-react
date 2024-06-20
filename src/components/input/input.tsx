import styles from './input.module.css'
import { InputProps } from './types';

function Input({name, type, placaholderText, onChange, value, required}: InputProps) {
    return (
        <input 
            className={styles['input']} 
            type={type ?? 'text'} 
            name={name}
            placeholder={placaholderText}
            onChange={onChange}
            value={value}
            required={required}
        />
    );
}

export default Input;