import { usePagination, DOTS } from '../../hooks/usePagination';
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducers';
import styles from './styles.module.scss'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = (props: any) => {
    const { itemsPerPage, totalItems, siblingCount = 1 } = props;
    const [searchParams, setSearchParams] = useSearchParams()

    const [currentPage, setCurrentPage] = useState(!!searchParams.get('page') ? Number(searchParams.get('page')) : 1);
    const paginationRange = usePagination({
        currentPage,
        totalItems,
        siblingCount,
        itemsPerPage
    });

    const lastPage = !!paginationRange && paginationRange[paginationRange.length - 1];

    useEffect(() => {
        if (currentPage > 1) {
            searchParams.set('page', currentPage.toString())
            setSearchParams(searchParams)
            if (Number(searchParams.get('page')) > lastPage) {
                setCurrentPage(1)
            }
        } else if (currentPage === 1 && searchParams.get('page')) {
            searchParams.delete('page')
            setSearchParams(searchParams)
        }
    }, [currentPage, searchParams, setSearchParams, lastPage])

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
        if (currentPage === 1) {
            setCurrentPage(1)
        }
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage === lastPage) {
            setCurrentPage(lastPage)
        }
    }
    return (
        <div className={styles.paginationSection}>
            <button className={styles.navigationButton} onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
            <ul className={styles.pages}>
                {!!paginationRange && paginationRange.map((pageNumber, index: number) => {
                    if (pageNumber === DOTS) {
                        return <li key={`dots-${index}`} className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={index}
                            className={`${styles.pageNumber} ${pageNumber === currentPage ? styles.active : ''}`}
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
            </ul>

            <button className={styles.navigationButton} onClick={handleNext} disabled={currentPage === lastPage}>Next</button>

        </div>
    )
}

export default Pagination