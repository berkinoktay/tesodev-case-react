import Pagination from "components/pagination";
import SortButton from "components/sortButton";
import ListBox from "./components/ListBox";
import styles from './styles.module.scss';
const List: React.FC = () => {

    return (
        <div className={`container ${styles.mainSection}`}>

            <div className={styles.listSide}>
                <ListBox />
            </div>
            <div className={styles.filterSide}>
                <SortButton title="Order By" items={[{ label: 'Name Ascending', value: 'ascName' }, { label: 'Name Descending', value: 'descName' }, { label: 'Year Ascending', value: 'ascYear' }, { label: 'Year Descending', value: 'descYear' }]} />
            </div>
        </div>
    )
}

export default List