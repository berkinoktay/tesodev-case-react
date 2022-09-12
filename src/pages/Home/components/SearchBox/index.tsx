import { useDispatch, useSelector } from 'react-redux'

import SearchInput from 'components/search'
import TesodevButton from 'components/tesodevButton'
import { setSearch } from 'redux/slices/records'
import styles from './styles.module.scss'
import { RootState } from 'redux/reducers'
const SearchBox = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.records.search);
    return (
        <div className={styles.searchBox}>
            <div className={styles.inputSection}>
                <SearchInput placeholder='Search name surname' showIcon className={styles.input} value={search} onChange={(e) => dispatch(setSearch(e.target.value.trim()))} />
                <TesodevButton title='Search' className={styles.searchButton} />
            </div>

        </div>
    )
}

export default SearchBox