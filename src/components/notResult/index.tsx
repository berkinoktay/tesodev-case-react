import { ReactComponent as SadFace } from 'assets/svg/sad-face.svg'
import styles from './styles.module.scss'
const NotResult = () => {
    return (
        <div className={styles.noResults}>
            <SadFace className={styles.sadFace} />
            <div>No results found.</div>
        </div>
    )
}

export default NotResult