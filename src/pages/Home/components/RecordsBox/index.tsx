import { RootState } from 'redux/reducers';
import { useSelector } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom'

import RecordItem from './RecordItem';
import styles from './styles.module.scss';
import NotResult from 'components/notResult';

const RecordsBox = () => {
    const navigate = useNavigate()
    const records = useSelector((state: RootState) => state.records.records);
    const search = useSelector((state: RootState) => state.records.search);

    const params: any = { search: search };

    const filteredRecords = records.filter((record) => record.name_surname.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || record.company.toLocaleUpperCase().includes(search.toLocaleUpperCase()));
    return (
        <>
            <div className={styles.recordsBox}>
                <ul className={styles.recordsList}>
                    {filteredRecords.slice(0, 3).map((record, index) => <RecordItem key={index} {...record} />)}

                </ul>
                {filteredRecords.length > 3 && <button onClick={() => navigate({ pathname: '/list', search: `?${createSearchParams(params)}`, })} className={styles.showMore}>Show more..</button>}
                {filteredRecords.length === 0 && <NotResult />}
            </div>


        </>

    );
};

export default RecordsBox;
