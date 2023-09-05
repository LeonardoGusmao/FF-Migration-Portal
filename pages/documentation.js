import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import React from 'react';


import { HorizontalHeader, Footer, Tile, FileMultipleIcon, PictureCard, Accordian, FilePptxIcon, FolderIcon } from '@exxonmobil/react-unity'

function Documentation() {

    const [expandedItem, setExpandedItem] = React.useState(null);

    function handleOnChange(e, newValue) {
        if (expandedItem !== newValue) {
            setExpandedItem(newValue);
        } else {
            setExpandedItem(null);
        }
    }

    return <div>
        <div className={styles.body}>

            <Head>
                <title>Digital Procedures | Portal</title>
                <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
                <meta name="DP-OSS" content="Digital Procedures | Portal" />
                <link rel="icon" href="../public/favicondp.ico" />
            </Head>

            <Navbar/>

            <div className={styles.containermain}>

                <div className="em-c-page-header ">
                    <h1 className="em-c-page-header__title em-u-font-style-semibold">Important Documents</h1>
                    <p className="em-c-page-header__desc"> </p>
                    <p>
                        Digital Procedures is a platform that enables the modernization of operational
                        processes with an advanced workflow management system that
                        enables better collaboration between people and automated systems. </p>

                    <p>
                        The application enables consistency and automation of electronic workflows with
                        detailed execution records, offers significant operational efficiency, improvement
                        potential and reduces the cost of compliance. </p>

                    <p> Here you'll find helpful documentation such as for the application overview and more with further details to get into the first steps on how to use Digital Procedures:</p>
                </div>

                <div className={styles.divdoc}>
                    <div className={styles.divdocsub}>
                        <table>
                            <tbody>
                                <tr>
                                    <td align="center">
                                        <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Digital%20Procedures%20Overview.pptx?web=1" target="_blank">
                                            <PictureCard className={styles.PictureCardLR} variant="bare" backgroundImage="https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/media/DP%20Overview_Icon_thumb.jpg">
                                                <PictureCard.Body>
                                                    <PictureCard.Body.Kicker></PictureCard.Body.Kicker>
                                                    <PictureCard.Body.Title>
                                                    </PictureCard.Body.Title>
                                                    <PictureCard.Body.Description>
                                                    </PictureCard.Body.Description>
                                                </PictureCard.Body>
                                            </PictureCard>
                                        </a>
                                    </td>
                                    <td align="center">
                                        <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Requesting%20Access%20to%20Digital%20Procedures.docx?web=1" target="_blank">
                                            <PictureCard className={styles.PictureCardM} variant="bare" backgroundImage="https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/media/DP%20Requesting%20Access_thumb.jpg">
                                                <PictureCard.Body>
                                                    <PictureCard.Body.Kicker></PictureCard.Body.Kicker>
                                                    <PictureCard.Body.Title>
                                                    </PictureCard.Body.Title>
                                                    <PictureCard.Body.Description>
                                                    </PictureCard.Body.Description>
                                                </PictureCard.Body>
                                            </PictureCard>
                                        </a>
                                    </td>
                                    <td align="center">
                                        <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Getting%20Logged%20In.pptx?web=1" target="_blank">
                                            <PictureCard className={styles.PictureCardLR} variant="bare" backgroundImage="https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/media/DP%20Getting%20Started_thumb.jpg">
                                                <PictureCard.Body>
                                                    <PictureCard.Body.Kicker></PictureCard.Body.Kicker>
                                                    <PictureCard.Body.Title>
                                                    </PictureCard.Body.Title>
                                                    <PictureCard.Body.Description>
                                                    </PictureCard.Body.Description>
                                                </PictureCard.Body>
                                            </PictureCard>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={styles.newdoclibrary}>
                    <div className={styles.test}>
                        <Accordian expanded={expandedItem} onChange={handleOnChange} >
                            <Accordian.Item title="Approving Procedures" value={1}>
                                <Tile.List className={styles.tilelistcustom}>
                                    <div>
                                        <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Writing%20a%20New%20Digital%20Procedure.pptx?web=1" target="_blank">
                                            <Tile color="main" className={styles.tilecustom}>
                                                <Tile.Headline>
                                                        <FilePptxIcon/>
                                                </Tile.Headline>
                                                <Tile.Description>
                                                    Creating a Procedure</Tile.Description>
                                            </Tile>
                                        </a>
                                    </div>
                                    
                                    <div>
                                        <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Approving%20a%20Digital%20Procedure.pptx?web=1" target="_blank">
                                            <Tile color="main" className={styles.tilecustom}>
                                                <Tile.Headline>
                                                    <FilePptxIcon />
                                                </Tile.Headline>
                                                <Tile.Description>
                                                    Approving a Procedure</Tile.Description>
                                            </Tile>
                                        </a>
                                    </div>
                                </Tile.List>
                            </Accordian.Item>
                            <Accordian.Item title="Executing Procedures" value={2}>
                                <Tile.List className={styles.tilelistcustom}>
                                    <div>
                                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Acknowledging%20a%20Digital%20Procedure.pptx?web=1" target="_blank">
                                        <Tile color="main" className={styles.tilecustom}>
                                            <Tile.Headline>
                                                <FilePptxIcon />
                                            </Tile.Headline>
                                            <Tile.Description>
                                                Acknowledging a Procedure</Tile.Description>
                                        </Tile >
                                    </a>
                                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Assigning%20a%20Digital%20Procedure.pptx?web=1" target="_blank">
                                        <Tile color="main" className={styles.tilecustom}>
                                            <Tile.Headline>
                                                <FilePptxIcon />
                                            </Tile.Headline>
                                            <Tile.Description>
                                                Assigning a Procedure for Execution</Tile.Description>
                                        </Tile >
                                    </a>
                                    </div>
                                    <div>
                                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Executing%20a%20Digital%20Procedure.pptx?web=1" target="_blank">
                                        <Tile color="main" className={styles.tilecustom}>
                                            <Tile.Headline>
                                                <FilePptxIcon />
                                            </Tile.Headline>
                                            <Tile.Description>
                                                Executing a Procedure</Tile.Description>
                                        </Tile >
                                    </a>
                                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Endorsing%20a%20Digital%20Procedure.pptx?web=1" target="_blank">
                                        <Tile color="main" className={styles.tilecustom}>
                                            <Tile.Headline>
                                                <FilePptxIcon />
                                            </Tile.Headline>
                                            <Tile.Description>
                                                Procedures Endorsements</Tile.Description>
                                        </Tile >
                                    </a>
                                    </div>
                                </Tile.List>
                            </Accordian.Item>
                        </Accordian>
                    </div>
                    <div className={styles.test}>
                    <Accordian expanded={expandedItem} onChange={handleOnChange} >
                        <Accordian.Item title="Reviewing Procedures" value={3}>
                            <Tile.List className={styles.tilelistcustom}>
                                <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Procedure%20Validation%20and%20Updates.pptx?web=1" target="_blank">
                                    <Tile color="main" className={styles.tilecustom}>
                                        <Tile.Headline>
                                            <FilePptxIcon />
                                        </Tile.Headline>
                                        <Tile.Description>
                                            Validation and Periodic Reviews</Tile.Description>
                                    </Tile>
                                </a>
                            </Tile.List>
                        </Accordian.Item>
                        <Accordian.Item title="Additional Features" value={4}>
                            <Tile.List className={styles.tilelistcustom}>
                                <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/SKELTA%20Replication%20Playbook_Digital%20Procedures.pptx?web=1" target="_blank">
                                    <Tile color="main" className={styles.tilecustom}>
                                        <Tile.Headline>
                                            <FilePptxIcon />
                                        </Tile.Headline>
                                        <Tile.Description>
                                            Replication Playbook</Tile.Description>
                                    </Tile>
                                </a>
                            </Tile.List>
                        </Accordian.Item>
                    </Accordian>
                    </div>
                </div>

                <p>
                    Access the complete library with all the available documentation and guides: </p>
                <div className={styles.test}>
                <Tile.List className={styles.tilelistcustom}>
                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Forms/End%20Users.aspx" target="_blank">
                        <Tile color="positive" className={styles.tilecustom}>
                            <Tile.Headline>
                                <Tile.Headline.Icon>
                                    <FolderIcon />
                                </Tile.Headline.Icon>
                            </Tile.Headline>
                            <Tile.Description>Tool Documentation Library</Tile.Description>
                        </Tile>
                    </a>

                    <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Shared%20Documents/Forms/Admin.aspx" target="_blank">
                        <Tile color="caution" className={styles.tilecustom}>
                            <Tile.Headline>
                                <Tile.Headline.Icon>
                                    <FolderIcon />
                                </Tile.Headline.Icon>
                            </Tile.Headline>
                            <Tile.Description>Admin Library</Tile.Description>
                        </Tile>
                    </a>
                </Tile.List>
                </div>
            </div >

            <footer className={styles.footer}>
                <Footer variant="condensed" className={styles.footer}>
                    <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
                </Footer>
            </footer>

        </div >
        
    </div >
}

export default Documentation;