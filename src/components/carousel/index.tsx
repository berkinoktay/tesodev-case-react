import { useEffect, useState, useRef } from 'react';

import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg';
import { CarouselProps } from 'interfaces/blog';

import styles from './styles.module.scss'


const Carousel: React.FC<CarouselProps> = (props) => {
    const { children, classNames, show } = props;

    const contentRef = useRef<HTMLDivElement>(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [length, setLength] = useState(Array.isArray(children) ? children.length : 1);

    useEffect(() => {
        setLength(Array.isArray(children) ? children.length : 1);
    }, [children])

    const nextSlide = () => {
        if (currentSlide < length - show) {
            setCurrentSlide(prevState => prevState + 1);
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prevState => prevState - 1);
        }
    }

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.transform = `translateX(-${currentSlide * (100 / show)}%)`;

            contentRef.current?.childNodes.forEach((child: any) => {
                child.style.width = `calc((100% / ${show}) - 24px)`;

            })
        }

    }, [show, currentSlide])
    return (
        <div className={`${styles.carouselContainer} ${classNames}`}>
            <div className={styles.carouselWrapper}>
                {length >= 4 && <button className={`${styles.arrows} ${styles.arrowLeft}`} onClick={prevSlide}>
                    <ArrowRight />
                </button>}

                <div className={styles.carouselContentWrapper}>
                    <div className={styles.carouselContent} ref={contentRef} >
                        {children}
                    </div>
                </div>
                {length >= 4 && <button className={`${styles.arrows} ${styles.arrowRight}`} onClick={nextSlide}>
                    <ArrowRight />
                </button>}

            </div>
        </div>
    )
}

export default Carousel