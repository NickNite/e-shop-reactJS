import React, { useState, useEffect } from 'react';
import styles from './changeAdv.module.css'
import image1 from '../../image/slide1.jpg';
import image2 from '../../image/slide2.jpg';
import image3 from '../../image/slide3.jpg';
import image4 from '../../image/slide4.jpg';

export const ChangeAdvertising = () => {
    let [image, setImage] = useState(image1);

    useEffect(() => {
        let changeImg;
        if (image == image1) {
            changeImg = image2
        }
        else if (image == image2) {
            changeImg = image3
        }
        else if (image == image3) {
            changeImg = image4
        }
        else if (image == image4) {
            changeImg = image1
        }
        setTimeout(() => {
            setImage(image = changeImg)
        }, 3000)
    }, [image])

    return (
        <div className={styles.slideCont}>
            <img src={image} />
        </div>
    )
}