
import React, { FC, useEffect } from "react"
import { useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "redux/reducers";

import SearchInput from "../search"
import TesodevButton from "../tesodevButton"
import styles from './styles.module.scss'
import tesodevLogo from 'assets/img/tesodev-logo.jpg'
import { setSearch } from 'redux/slices/records'


const Header: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.records.search);
    const [searchParams, setSearchParams] = useSearchParams()

    const { pathname } = location

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!search) {
            searchParams.delete('search')
            setSearchParams(searchParams)
        } else {
            searchParams.set('search', search)
            setSearchParams(searchParams)

        }
    }
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== " ") {
            dispatch(setSearch(e.target.value))
        }
    }

    return (
        <header className={`container ${styles.header}`}>
            {(pathname === "/list" || pathname === "/list/add-link") && <div className={styles.logoSection}>

                <a href="/">
                    <img src={tesodevLogo} className={styles.logo} alt="Tesodev Logo" />
                </a>

                {pathname === "/list" && <form className={styles.searchSection} onSubmit={handleSubmit}>
                    <SearchInput placeholder="Search name" value={search} onChange={handleSearch} />
                    <TesodevButton type="submit" title="Search" />
                </form>}
            </div>}


            {pathname !== "/add-link" && <TesodevButton title="Add new record" onClick={() => navigate('/list/add-link')} />}
        </header>
    )
}
export default Header