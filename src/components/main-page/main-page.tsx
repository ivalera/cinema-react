import styles from './main-page.module.css'
import Header from "../header/header";
import Filters from '../filters/filters';
import ModalFormLogin from '../modal-forms/modal-form-login/modal-form-login';
import ModalFormSignup from '../modal-forms/modal-form-signup/modal-form-signup';
import { useState } from 'react';
import { FiltersProvider } from '../filters/filters-context';

export default function MainPage(){
    const [showModalForm, setShowModalForm] = useState(false);

    function handleOpenModalForm(){
        setShowModalForm(true);
    }

    return(
        <>  
            <div className={styles['main__page']} >
                <Header onOpenModalFormLogin={handleOpenModalForm}/>
                <div className={styles['main__content']}>
                    <FiltersProvider>
                        <Filters/>
                    </FiltersProvider>
                </div>
            </div>  
            <ModalFormLogin isVisible={showModalForm} />
            <ModalFormSignup isVisible={false} />
        </>
    )
}