import { CarouselItemProps } from 'interfaces/blog'
import { dateToTimeAgo } from 'utils/dateToTimeAgo'
import styles from './styles.module.scss'


const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const { title, createdTime, author, img } = props

    return (
        <div className={styles.carouselItem}>
            <div className={styles.itemWrapper}>
                <img src={img} alt="placeholder" />
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.meta}>
                    <span className={styles.time}>{dateToTimeAgo(new Date(createdTime))}</span>

                    <span className={styles.author}>by {author}</span>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem