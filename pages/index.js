import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'


import { HorizontalHeader, Footer, Section, Grid, HeroBlock, PromoBlock, Button, FileMultipleIcon, ArrowSubdirectoryRightIcon, OilWorkerIcon, DeviceMonitorIcon } from '@exxonmobil/react-unity'

export default function Home() {
  return (
    <div className={styles.body}>

      <Head>
        <title>Digital Procedures | Portal</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=EDGE" />
        <meta name="DP-Portal" content="Digital Procedures | Portal" />
        <link rel="icon" href="../public/favicondp.ico" />
      </Head>

      <Navbar/>

      <HeroBlock className={styles.heroblock} variant={"default"} backgroundImage="https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/media/hero.jpg">
        <HeroBlock.Body>
          <div className={styles.centerbox}>
            <HeroBlock.Title>Digital Procedures</HeroBlock.Title>
            <HeroBlock.Description>
              Holistic solution to create, maintain, execute, and manage procedures.
            </HeroBlock.Description>
            <a href='https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/faq.html'><Button variant="primary">Learn more</Button></a>
          </div>
        </HeroBlock.Body>
      </HeroBlock>

      <div className={styles.containermain}>
        <Section title="Functionalities" underline="main">
          <p>
            Digital Procedures enables the best in management of procedures from its creation, through its revision and its permanent renewal, leveraging well sructured business life cycles into the thoughtful transformations that today's a must have in digital platforms.
          </p>
        </Section>
        <Grid variant="2-up" className={styles.gridcorrection}>
          <Grid.Item className={styles.griditem}>
            <table className={styles.gridtable}>
              <tbody>
                <tr>
                  <th><a href='' /><FileMultipleIcon size="large" /></th>
                  <td>
                    <h2>Create new procedures</h2>
                    Create customized procedures to document and instruct operators how to perform their activities quickly and safely.</td>
                </tr>
              </tbody>
            </table>
          </Grid.Item>
          <Grid.Item className={styles.griditem}>
            <table className={styles.gridtable}>
              <tbody>
                <tr>
                  <th><a href='' /><ArrowSubdirectoryRightIcon size="large" /></th>
                  <td>
                    <h2>Well defined approval flow</h2>
                    From creation to execution, each step is validated following an approval flow that makes the process reliable.</td>
                </tr>
              </tbody>
            </table>
          </Grid.Item>
          <Grid.Item className={styles.griditem}>
            <table className={styles.gridtable}>
              <tbody>
                <tr>
                  <th><a href='' /><OilWorkerIcon size="large" /></th>
                  <td>
                    <h2>Monitor work progress</h2>
                    Making use of reports and dashboars, you can monitor the progress of procedures creation, execution and validation while filtering with personalized data for your Post, Unit, Control Center, Site and Company</td>
                </tr>
              </tbody>
            </table>
          </Grid.Item>
          <Grid.Item className={styles.griditem}>
            <table className={styles.gridtable}>
              <tbody>
                <tr>
                  <th><a href='' /><DeviceMonitorIcon size="large" /></th>
                  <td>
                    <h2>Propose Redlines reviews</h2>
                    Make use of a pre-defined process to review over procedure executions results and comments while identifying and tracking improvement opportunities in seamlessly and organized way.</td>
                </tr>
              </tbody>
            </table>
          </Grid.Item>
        </Grid>
      </div>

      <div className={styles.promodiv}>
        <PromoBlock>
          <div className={styles.promodivbox}>
            <PromoBlock.Title>Ready to get started?</PromoBlock.Title>
            <PromoBlock.Description>
              Do you want to know what are the prerequisites for the tool adoption, what does it offer and how it can increase produtivity and safely manage your workflows?
            </PromoBlock.Description>
            <Button.Group responsive>
              <a href="https://ishareteam6.na.xom.com/sites/DigProcdrs/Portal/support.html"><Button variant="primary">Get in touch</Button></a>
            </Button.Group>
          </div>
        </PromoBlock>
      </div>

      <footer className={styles.footer}>
        <Footer variant="condensed" className={styles.footer}>
          <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
        </Footer>
      </footer>

    </div >
  )
}
