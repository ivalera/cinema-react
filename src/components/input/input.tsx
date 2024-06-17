import styles from './input.module.css'

type InputProps = {
    name: string;
    placaholderText: string;
    type?: string;
  }

export default function Input({name, type='text', placaholderText}: InputProps) {
    return (
        <input 
            className={styles['input']} 
            name={name}
            type={type} 
            placeholder={placaholderText}
            required
        />
    );
}