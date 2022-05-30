import React, { useEffect, useState } from 'react'
import { API, createImgURL } from '../../apiConfig';
import styles from "./Card.module.css";

const Card = ({ title, imgPath }) => {
    const [img, setImg] = useState(null);

    useEffect(() => {
        const url = createImgURL.api(API.quality.backdropSmall, imgPath);
        setImg(url);
    },[imgPath]);

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${img})`,
                  }}
                  className={styles.card}
            >
                <div id={styles.card_gradient}>
                    <h1 className={styles.card_title}>{title}</h1>
                </div>
            </div>
        </>
    )
}

export default Card