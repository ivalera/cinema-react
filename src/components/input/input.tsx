import styles from './input.module.css'

type InputProps = {
    placaholderText: string;
    type?: string;
  }

export default function Input( {type='text', placaholderText }: InputProps){
    return(
        <input 
            className={styles['input']} 
            type={type} 
            placeholder={placaholderText}
            required
        />
    )
}