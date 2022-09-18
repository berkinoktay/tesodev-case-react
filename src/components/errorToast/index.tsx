import styles from './styles.module.scss'
import { ReactComponent as ErrorIcon } from 'assets/svg/error-icon.svg'
interface IErrorToast {
    title: string
    message: string
    setShow?: React.Dispatch<React.SetStateAction<boolean>>
}
const ErrorToast: React.FC<IErrorToast> = (props) => {
    const { title, message, setShow } = props
    return (
        <div className={styles.toastContainer}>
            <div className={styles.errors}>
                <div className={styles.title}>{title}</div>
                <div className={styles.message}>{message}</div>
            </div>
            <div className={styles.tagContainer}>
                <div className={styles.tag}>Error</div>
            </div>
            <ErrorIcon className={styles.closeIcon} onClick={() => !!setShow && setShow(false)} />
        </div>
    )
}

export default ErrorToast