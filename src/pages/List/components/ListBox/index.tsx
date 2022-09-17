import locationIcon from 'assets/svg/location.svg';
import NotResult from 'components/notResult';
import { IRecords } from 'interfaces/records';
import { ISortItem } from 'interfaces/sort';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import styles from './styles.module.scss';


const ListBox: React.FC = () => {

    const records = useSelector((state: RootState) => state.records.records);
    const [searchParams] = useSearchParams();
    const [filteredRecords, setFilteredRecords] = useState<IRecords[]>(records);
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    console.log(sort);

    useEffect(() => {
        const data = records.filter(
            (record) =>
                record.name_surname
                    .toLocaleLowerCase()
                    .includes(search?.toLocaleLowerCase() || '') ||
                record.company
                    .toLocaleUpperCase()
                    .includes(search?.toLocaleUpperCase() || '')
        ).sort((a: IRecords, b: IRecords) => {
            const dateA = a.date.split('/').reverse().join('-');
            const dateB = b.date.split('/').reverse().join('-');
            if (sort === 'ascName') {
                return a.name_surname.localeCompare(b.name_surname);
            }
            else if (sort === 'descName') {
                return b.name_surname.localeCompare(a.name_surname);
            }
            else if (sort === 'ascYear') {
                console.log("asc girdi")
                return new Date(dateA).getTime() - new Date(dateB).getTime();
            }
            else if (sort === 'descYear') {
                console.log("desc girdi")
                return new Date(dateB).getTime() - new Date(dateA).getTime();
            } else {
                return 0;

            }
        })
        setFilteredRecords([...data]);
    }, [search, sort])


    return (
        <>
            {filteredRecords.length === 0 ? (
                <NotResult />
            ) : (
                <ul className={styles.listBox}>
                    {filteredRecords.map((record: IRecords, index: number) => (
                        <li key={index}>
                            <div>
                                <div className={styles.leftPart}>
                                    <img
                                        src={locationIcon}
                                        width={24}
                                        height={24}
                                        alt="Location Icon"
                                    />
                                    <div className={styles.detailsBox}>
                                        <div className={styles.company}>{record.company}</div>
                                        <div className={styles.location}>
                                            {record.city}, {record.country}
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.rightPart}>
                                    <div className={styles.name}>{record.name_surname}</div>
                                    <div className={styles.date}>{record.date}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ListBox;
