import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <h1 className={`${styles.h1Text} ${styles.blackText}`}>
                    Download the source code
                </h1>
                <p className={`${styles.pText} ${styles.blackText}`}>
                    Get the full source code on github
                </p>
                <a
                    href="https://github.com/javiergomezve/NftMarketPlace"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.btnPrimary}
                >
                    Source code
                </a>
                <div className={styles.flexCenter}>
                    <img
                        src={assets.scene}
                        alt="screens"
                        className={styles.fullImg}
                    />
                </div>
            </div>
        </div>
    );
};

export default Download;
