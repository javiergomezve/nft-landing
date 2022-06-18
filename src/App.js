import React, { Fragment } from 'react';

import assets from './assets';
import styles from './styles/Global';
import { Download, Features, SectionWrapper } from './components';

const App = () => {
    return (
        <Fragment>
            <SectionWrapper
                title="Your own store of Nifty NFTs. Start selling & growing."
                description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />

            <SectionWrapper
                title="Smart user interface marketplace"
                description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
                mockupImg={assets.homeCards}
                reverse
            />

            <Features />

            <SectionWrapper
                title="Deployment"
                description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
                mockupImg={assets.feature}
                reverse
            />

            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
                mockupImg={assets.mockup}
                banner="banner02"
            />

            <Download />

            <div
                className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}
            >
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    Made by{' '}
                    <a
                        href="https://javiergomezve.com"
                        target="_black"
                        className="font-bold"
                    >
                        javiergomezve
                    </a>
                </p>
            </div>
        </Fragment>
    );
};

export default App;
