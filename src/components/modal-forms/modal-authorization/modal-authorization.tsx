import { ReactNode } from 'react';
import styles from './modal-authorization.module.css';

type ModalAuthorizationProps = {
    isVisible: boolean;
    modalTitle: string;
    children: ReactNode
}   

export default function ModalAuthorization({isVisible, modalTitle, children}: ModalAuthorizationProps) {
    return(
        <dialog open={isVisible} className={styles['modal__authorization']}>
            <h1 className={styles['modal__title']}>{modalTitle}</h1>
            {children}
        </dialog>
    );
}