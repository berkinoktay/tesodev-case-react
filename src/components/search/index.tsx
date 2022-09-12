import React, { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import searchIcon from 'assets/svg/search-icon.svg'
interface SearchProps {
    placeholder?: string
    value?: string
    onChange?: (event: any) => void
    showIcon?: boolean
    className?: string
}
const SearchInput: FC<PropsWithChildren<SearchProps>> = (props) => {
    const { showIcon = true, placeholder, value, onChange, className } = props
    return (
        <div className={`${styles.searchBox} ${className}`}>
            {showIcon && <div className={styles.searchIcon}>
                <img src={searchIcon} alt="Search Icon" />
            </div>}

            <input className={styles.search} placeholder={placeholder} value={value} onChange={onChange} />

        </div>
    )
}

export default SearchInput