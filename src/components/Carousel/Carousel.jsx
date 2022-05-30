import React from 'react'
import Slider from 'react-slick';
import useApi from '../../hooks/useApi'
import Card from '../Card/Card';
import {carouselSettings} from './carouselSettings'
import styles from "./Carousel.module.css";

const Carousel = ({entity, title}) => {
  const values = useApi(entity);

  return (
    <>
      <div id={styles.carousel_container}>
        <div id={styles.carousel_title}>{title}</div>
        <Slider {...carouselSettings}>
          {
            values.map((value) => {
              return (
                <Card
                  key={value.id}
                  title={value.title || value.name}
                  imgPath={value.backdrop_path}
                />
              )
            })
          }
        </Slider>
      </div>
    </>
  )
}

export default Carousel