import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducers'

import HomeLogo from './components/HomeLogo'
import SearchBox from './components/SearchBox'
import RecordsBox from './components/RecordsBox'
import Carousel from 'components/carousel'
import CarouselItem from 'components/carousel/CarouselItem'
import styles from './styles.module.scss'

import BlogCover from 'assets/img/blog-cover.jpg'
import ContactImg from 'assets/img/contact-img.png'
const HomePage = () => {
  const search = useSelector((state: RootState) => state.records.search);

  const blog = [{
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    createdTime: '2022-09-14T17:00:00',
    author: 'Troy Corlson',
    img: BlogCover
  },
  {
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    createdTime: '2022-09-05',
    author: 'Troy Corlson',
    img: BlogCover,

  },
  {
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    createdTime: '2021-05-05',
    author: 'Troy Corlson',
    img: BlogCover,

  },
  {
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    createdTime: '2021-05-05',
    author: 'Troy Corlson',
    img: BlogCover,

  },
  {
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    createdTime: '2021-05-05',
    author: 'Troy Corlson',
    img: BlogCover,

  }]
  return <div className={`${styles.home}`}>
    <div className='container'>
      <div className={styles.searchSection}>
        <HomeLogo />
        <div className={styles.search}>
          <div className={styles.findBox}>
            <h2>Find in records</h2>
            <SearchBox />
          </div>
          {search.length >= 2 && <RecordsBox />}
        </div>
      </div>

      <div className={styles.sliderSection}>
        <h2>Top News</h2>
        <Carousel classNames={styles.carousel} show={3}>
          {blog.map((item, index) => <CarouselItem key={index} {...item} />)}
        </Carousel>
      </div>
    </div>


    <div className={styles.contactSection}>
      <div className='container'>
        <div className={styles.contactWrapper}>
          <img src={ContactImg} alt="Contact Us" />
          <div className={styles.infoBox}>
            <h2>Contact Us</h2>
            <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul </p>
            <div className={styles.email}>Email: bilgi@tesodev.com</div>
          </div>
          <div className={styles.mapBox}>
            <iframe title='Tesodev Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470153027!2d28.888759415809677!3d41.01913527929977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1663193347638!5m2!1str!2str" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} width="467" height="222"></iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
}

export default HomePage

