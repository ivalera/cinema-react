import styles from './main-page.module.css'
import Header from "../header/header";
import Filters from '../filters/filters';

{styles['main__page']} 
export default function MainPage(){
    return(
        <>  
            <div className={styles['main__page']} >
                <Header/>
                <div className={styles['main__content']}>
                    <Filters/>
                </div>
            </div>  
        </>
    )
}