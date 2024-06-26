import styles from './button.module.css'
import { ButtonProps } from './types';

function Button({type, text, onClick} : ButtonProps) {
    return (
        <button
            type={type ?? 'button'}
            className={styles['button']}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;