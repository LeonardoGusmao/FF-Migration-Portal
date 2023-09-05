import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from './navbar'

import { HorizontalHeader, Footer } from '@exxonmobil/react-unity'

import underconstruction from '../public/media/underconstruction.png'

function Uconstruction() {
    return <div>

        <div className={styles.body}>

            <Head>
                <title>Digital Procedures | Portal</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
                <meta name="DP-OSS" content="Digital Procedures | Portal" />
                <link rel="icon" href="../public/favicondp.ico" />
            </Head>

            <Navbar/>

            <div className={styles.ucbackground}>

                <div className={styles.ucoverlay}>
                    <div className={styles.ucelements}>
                        <Image className={styles.ucimage}
                            priority
                            src={underconstruction}
                            alt="" />
                        <p><a className={styles.uctitle}>This page is currently under deployment.</a></p>
                        <p><a>Please hold while we bring you some new and cool stuff in a near future.</a></p>
                    </div>
                </div>

            </div>

            <footer className={styles.footer}>
                <Footer variant="condensed" className={styles.footer}>
                    <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
                </Footer>
            </footer>

        </div >

    </div>
}

export default Uconstruction;