import styles from './button.module.css'
import { ButtonProps } from './types';

function Button({type, text} : ButtonProps) {
    return (
        <button
            type={type ?? 'button'}
            className={styles['button']}>
            {text}
        </button>
    );
}

export default Button;