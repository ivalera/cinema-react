import styles from './pagination.module.css'

export default function Pagination(){
  return(
    <div className={styles['pagination']}>
      <ul className={styles['pagination__list']}>
        <li>{'<'}</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>{'>'}</li>
      </ul>
    </div>
  )
}