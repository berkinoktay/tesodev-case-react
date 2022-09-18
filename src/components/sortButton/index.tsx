import SortIcon from 'assets/svg/sort-icon.svg'
import { ISortButton, ISortItem } from 'interfaces/sort';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

const SortButton: React.FC<ISortButton> = (props) => {
    const { title, items } = props

    const ref = useRef<HTMLDivElement>(null);

    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedItem, setSelectedItem] = useState<ISortItem>({ label: '', value: '' });
    const [isOpen, setIsOpen] = useState(false);

    const currentFilter = items.find((item) => item.value === searchParams.get('sort'));
    useEffect(() => {
        function handleClickOutSide(e: any) {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutSide);

        // clean up function before running new effect
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        }
    }, [isOpen])

    useEffect(() => {
        if (!!selectedItem.value) {
            searchParams.set('sort', selectedItem.value)
            setSearchParams(searchParams)
        }
    }, [selectedItem, searchParams, setSearchParams])
    const handleClick = (item: ISortItem) => {
        setSelectedItem({ label: item.label, value: item.value })
        setIsOpen(false);
    }
    return (
        <div ref={ref} className={styles.sortSection}>
            <button onClick={() => setIsOpen(prev => !prev)}><img src={SortIcon} width={22} height={20} alt="Sort Icon" /> <div className={styles.title}>{!!currentFilter ? currentFilter.label : title}</div></button>
            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {items.map((item, index) => <div key={index} className={`${styles.dropdownItem} ${selectedItem.value === item.value ? styles.active : ''}`} onClick={() => handleClick(item)}>{item.label}</div>)}

            </div>
        </div>
    )
}

export default SortButton