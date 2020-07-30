import {ImageUrls} from './imageGenerator';
import React from 'react';
import * as styles from "./Thumbnails.module.scss";



export function ThumbnailList() {

    const images = ImageUrls.map(
        imageUrl => <li className={styles.thumbnailItem}><img className={styles.thumbnailImg} src={imageUrl}/></li>
    );

    return (
        <section>
            <h2>Hello</h2>
            <ul className={styles.thumbnailList}>
                {images}
            </ul>
        </section>
    );
}