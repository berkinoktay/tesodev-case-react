import { IRecords } from 'interfaces/records';
import styles from './styles.module.scss';
import locationIcon from 'assets/svg/location.svg'
const RecordItem = (props: IRecords) => {
    const { company, city, country } = props;
    return (
        <li className={styles.recordItem}>

            <img
                src={locationIcon}
                width={24}
                height={24}
                alt="Location Icon"
            />

            <div className={styles.details}>
                <div className={styles.company}>{company}</div>
                <div className={styles.location}>{city}, {country}</div>
            </div></li>
    )
}

export default RecordItem