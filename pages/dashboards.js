import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import { HorizontalHeader, Footer, Tile, Tabs} from '@exxonmobil/react-unity';
import dynamic from 'next/dynamic';
import Iframe from 'react-iframe'


import * as React from "react";

function Dashboards() {
    return <div>
    <div className={styles.body}>

        <Head>
            <title>Digital Procedures | Portal</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
            <meta name="DP-OSS" content="Digital Procedures | Portal" />
            <link rel="icon" href="../public/favicondp.ico" />
        </Head>

        <Navbar/>

        <Tabs style={{marginLeft: 5, marginTop: 70}}>
            <Tabs.Item title="SNG" className={styles.tabspad}>
                <iframe id='SNGIFrame' title="SNG Procedures Dashboard"
                    width="1875" 
                    height="815" 
                    src="https://app.powerbi.com/reportEmbed?reportId=442c0044-188e-43ca-a663-1d7d86aea74b&autoAuth=true&ctid=d1ee1acd-bc7a-4bc4-a787-938c49a83906" 
                    frameborder="0" 
                    allowFullScreen="true">
                </iframe>
            </Tabs.Item>
            <Tabs.Item title="MBPP" className={styles.tabspad}>
                <iframe title="MBPP Procedures Dashboard" 
                    width="1875" 
                    height="815"
                    src="https://app.powerbi.com/reportEmbed?reportId=9e919c52-cb78-4eb9-bad5-df2a05f53449&autoAuth=true&ctid=d1ee1acd-bc7a-4bc4-a787-938c49a83906" 
                    frameborder="0" 
                    allowFullScreen="true">
                </iframe>    
            </Tabs.Item>
            <Tabs.Item title="JOL" className={styles.tabspad}>
                <iframe title="JOL Procedures Dashboard" 
                    width="1875" 
                    height="815" 
                    src="https://app.powerbi.com/reportEmbed?reportId=e2adee20-c001-4830-8385-880590911778&autoAuth=true&ctid=d1ee1acd-bc7a-4bc4-a787-938c49a83906" 
                    frameborder="0" 
                    allowFullScreen="true">
                </iframe>    
            </Tabs.Item>
            <Tabs.Item title="BTCX" className={styles.tabspad}>
                <iframe title="BTCX Procedures Dashboard" 
                    width="1875" 
                    height="815" 
                    src="https://app.powerbi.com/reportEmbed?reportId=80d5fd64-f90b-426e-81a6-e0e24f2eb10d&autoAuth=true&ctid=d1ee1acd-bc7a-4bc4-a787-938c49a83906" 
                    frameborder="0" 
                    allowFullScreen="true">
                </iframe>
            </Tabs.Item>
            <Tabs.Item title="GCGV" className={styles.tabspad}>
                <iframe title="GCGV Procedures Dashboard" 
                    width="1875" 
                    height="815" 
                    src="https://app.powerbi.com/reportEmbed?reportId=0584b814-208b-4d85-b7cb-c95406f19467&autoAuth=true&ctid=d1ee1acd-bc7a-4bc4-a787-938c49a83906" 
                    frameborder="0" 
                    allowFullScreen="true">
                </iframe>    
            </Tabs.Item>
        </Tabs>

        <footer className={styles.footer}>
            <Footer variant="condensed" className={styles.footer}>
                <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
            </Footer>
        </footer>

    </div >
    
</div >
         
}

export default Dashboards;