import React from 'react'
import Separator from '../Separator/Separator';
import { API, createImgURL } from '../../apiConfig';
import GetRandomMovie from '../../Utils/GetRandomMovie';
import styles from "./Banner.module.css";

const Banner = () => {
  const movie = GetRandomMovie();

  const getMovieImg = () => {
    return createImgURL.api(API.quality.backdropLarge, movie.backdrop_path);
  }

  if (movie) {
    return (
      <div
        id={`${styles.banner_container}`}
        style={{ backgroundImage: `url(${getMovieImg()})` }}
      >
        <div id={styles.banner_gradient}>
          <div id={styles.banner_info}>
            <div id={styles.banner_title}>{movie.title}</div>
            <Separator height={"20px"} />
            <div id={styles.banner_misc}>
              <div id={styles.banner_release}>Release: {movie.release_date}</div>
              <div id={styles.banner_rating}>Rating: {movie.vote_average}</div>
            </div>
            <Separator height={"40px"} />
            <div id={styles.banner_overview}>{movie.overview}</div>
            <Separator height={"20px"} />
            <div id={styles.banner_buttons}>
              <button id={styles.play_button}>Play</button>
              <button id={styles.info_button}>More Info</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner