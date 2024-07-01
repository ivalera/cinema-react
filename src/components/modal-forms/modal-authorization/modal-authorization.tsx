import { ReactNode, useEffect, useRef } from 'react';
import styles from './modal-authorization.module.css';

type ModalAuthorizationProps = {
    isVisibleModal: boolean;
    modalTitle: string;
    children: ReactNode
}   

export default function ModalAuthorization({isVisibleModal, modalTitle, children}: ModalAuthorizationProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (dialog) {
            if (isVisibleModal) {
                if (!dialog.open) {
                    dialog.showModal();
                }
            } else {
                if (dialog.open) {
                    dialog.close();
                }
            }
        }
    }, [isVisibleModal]);

    return(
        <dialog ref={dialogRef} className={styles['modal__authorization']}>
            <h1 className={styles['modal__title']}>{modalTitle}</h1>
            {children}
        </dialog>
    );
}