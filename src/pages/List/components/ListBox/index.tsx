import locationIcon from 'assets/svg/location.svg';
import NotResult from 'components/notResult';
import Pagination from 'components/pagination';
import { IRecords } from 'interfaces/records';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import styles from './styles.module.scss';


const ListBox: React.FC = () => {
    const records = useSelector((state: RootState) => state.records.records);
    const [searchParams] = useSearchParams();
    const [recordsPerPage] = useState(6);

    useEffect(() => {
        console.log("records", records)

    }, [records])
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const currentPage = Number(searchParams.get('page')) || 1

    const firstPageIndex = (currentPage - 1) * recordsPerPage;
    const lastPageIndex = firstPageIndex + recordsPerPage;


    const filteredRecords = useMemo(() => {
        return records.filter(
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
                return new Date(dateA).getTime() - new Date(dateB).getTime();
            }
            else if (sort === 'descYear') {
                return new Date(dateB).getTime() - new Date(dateA).getTime();
            } else {
                return 0;

            }
        })
    }, [records, search, sort, currentPage]);
    return (
        <>
            {filteredRecords.length === 0 ? (
                <NotResult />
            ) : (
                <>
                    <ul className={styles.listBox}>
                        {filteredRecords.slice(firstPageIndex, lastPageIndex).map((record: IRecords, index: number) => (
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

                    <Pagination currentPage={currentPage} itemsPerPage={recordsPerPage} totalItems={filteredRecords.length} />
                </>
            )}
        </>
    );
};

export default ListBox;
