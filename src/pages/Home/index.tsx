
import HomeLogo from './components/HomeLogo'
import SearchBox from './components/SearchBox'
import RecordsBox from './components/RecordsBox'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducers'

const HomePage = () => {
  const search = useSelector((state: RootState) => state.records.search);

  return <div className={`container ${styles.searchSection}`}>

    <HomeLogo />
    <div className={styles.search}>
      <div className={styles.findBox}>
        <h2>Find in records</h2>
        <SearchBox />
      </div>
      {search.length >= 2 && <RecordsBox />}





    </div>
  </div>
}

export default HomePage

