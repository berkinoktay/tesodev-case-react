
import React, { FC } from "react"
import { useNavigate, useLocation } from "react-router-dom"

import SearchInput from "../search"
import TesodevButton from "../tesodevButton"
import styles from './styles.module.scss'
import tesodevLogo from 'assets/img/tesodev-logo.jpg'

const Header: FC = () => {
    const [searchValue, setSearchValue] = React.useState('')
    const location = useLocation()
    const navigate = useNavigate()
    // const router = useRouter()
    const { pathname } = location
    console.log("location", location)
    return (
        <header className={`container ${styles.header}`}>
            {(pathname === "/list" || pathname === "/list/add-link") && <div className={styles.logoSection}>

                <a href="/">
                    <img src={tesodevLogo} className={styles.logo} alt="Tesodev Logo" />
                </a>

                {pathname === "/list" && <div className={styles.searchSection}>
                    <SearchInput placeholder="Search name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <TesodevButton title="Search" />
                </div>}
            </div>}


            {pathname !== "/add-link" && <TesodevButton title="Add new record" onClick={() => navigate('/list/add-link')} />}
        </header>
    )
}
export default Header