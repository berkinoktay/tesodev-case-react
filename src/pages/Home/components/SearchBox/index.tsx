import { useDispatch, useSelector } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'

import { RootState } from 'redux/reducers'
import { setSearch } from 'redux/slices/records'

import SearchInput from 'components/search'
import TesodevButton from 'components/tesodevButton'

import styles from './styles.module.scss'
const SearchBox = () => {

    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.records.search);
    const navigate = useNavigate();

    const params: any = { search: search };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== " ") {
            dispatch(setSearch(e.target.value))
        }

    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate({
            pathname: '/list',
            search: `?${createSearchParams(params)}`,
        })
    }
    return (
        <div className={styles.searchBox}>
            <form className={styles.inputSection} onSubmit={handleSubmit}>

                <SearchInput placeholder='Search name, surname or company' showIcon className={styles.input} value={search} onChange={handleSearch} />
                <TesodevButton type='submit' title='Search' className={styles.searchButton} />
            </form>

        </div>
    )
}

export default SearchBox