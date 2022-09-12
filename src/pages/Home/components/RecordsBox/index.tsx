import { RootState } from 'redux/reducers';
import { useSelector } from 'react-redux';
import RecordItem from './RecordItem';
import styles from './styles.module.scss';
const RecordsBox = () => {
    const records = useSelector((state: RootState) => state.records.records);
    const search = useSelector((state: RootState) => state.records.search);
    const filteredRecords = records.filter((record) => record.name_surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || record.company.toLocaleUpperCase().includes(search.toLocaleUpperCase()));
    console.log("records", records);
    return (
        <div className={styles.recordsBox}>
            <ul className={styles.recordsList}>
                {filteredRecords.slice(0, 3).map((record, index) => <RecordItem key={index} {...record} />)}

            </ul>
            {filteredRecords.length > 3 && <a href="/list" className={styles.showMore}>Show more..</a>}


        </div>
    );
};

export default RecordsBox;
