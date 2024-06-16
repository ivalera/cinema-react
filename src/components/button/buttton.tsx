import styles from './button.module.css'

type ButtonProps = {
  name: string;
}

export default function Button({name} : ButtonProps) {
    return (
        <button 
            className={styles['button']}>
            {name}
        </button>
    );
  }