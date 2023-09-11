import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Navbar from './navbar'


import { HorizontalHeader, Footer, Card, MediaBlock, ProfileImage, LinkList, LinkIcon, LocationArrowIcon, ClockIcon, Well, Button } from '@exxonmobil/react-unity'

import gakotov from '../public/media/contact/sa_gakotov_LThumb.jpg'
import rhassun from '../public/media/contact/sa_rhassun_LThumb.jpg'
import bavdmel from '../public/media/contact/sa_bavdmel_LThumb.jpg'
import cmriver from '../public/media/contact/sa_cmriver_LThumb.jpg'
import lgoliv1 from '../public/media/contact/sa_lgoliv1_LThumb.jpg'
import codingc from '../public/media/contact/coding-cody.png'
import ndidwis from '../public/media/contact/ap_ndidwis_LThumb.jpg'
import lfcpere from '../public/media/contact/sa_lfcpere_LThumb.jpg'
import jmanee1 from '../public/media/contact/ap_jmanee1_LThumb.jpg'
import mvachir from '../public/media/contact/ap_mvachir_LThumb.jpg'


function Support() {
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
                    <h1 className="em-c-page-header__title em-u-font-style-semibold">About Us</h1>
                    <p className="em-c-page-header__desc"></p>
                    <h4>Workforce Enablement program is responsible for replicating, supporting and improving the tool functionalities as well as providing training, documenting and listing the prerequisites for Digital Procedures adoption.</h4>
                    <p></p>
                        For application support or more information beyond tool documentation, do not hesitate to reach out to the application support team by raising a ticket in <Button style={{background: '#d22224', marginLeft: 10}}><a href="https://goto/wfeticket" style={{color: 'white'}}><b>goto/wfeticket</b></a></Button>
                </div>

                <div>
                    <table className={styles.tablestyle}>
                        <tbody>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>

                            <tr>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Flag>Product Owner</Card.Flag>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={gakotov}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Kotovicz, Guilherme A</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>Global Operational Enablement Product Owner</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Flag>Scrum Master West</Card.Flag>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={lfcpere}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Pereira, Luis Fernando C</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>Workforce Enablement - West Scrum Master</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Flag>Scrum Master East</Card.Flag>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={mvachir}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Vachirapipop, Malika</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>Workforce Enablement - East Scrum Master</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Bangkok, Thailand</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT+7</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Flag>Application SME</Card.Flag>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={rhassun}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Assuncao, Rafael H</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE West - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={bavdmel}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Mello, Bruno A V De</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE West - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={cmriver}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Rivera, Christian M</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE West - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={lgoliv1}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Oliveira, Leonardo Gusmao</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>I&BT - Trainee</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Curitiba, Brazil</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT-4</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={ndidwis}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Didwisade, Nichapon</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE East - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Bangkok, Thailand</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT+7</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                            </tr >
                            <tr style={{alignTracks: 'center'}}>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={codingc}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Kitiprasert, Jirapas</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE East - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Bangkok, Thailand</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT+7</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={jmanee1}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Maneewan, Jeerapol</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE East - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> <a href='#'>Bangkok, Thailand</a> </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> <a href='#'>GMT+7</a></LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                                <td className={styles.tdstyle}>
                                    <Card className={styles.cardstyle}>
                                        <Card.Body>
                                            <MediaBlock size="small">
                                                <MediaBlock.Media>
                                                    <ProfileImage src=''><Image
                                                        priority
                                                        src={codingc}
                                                        height={115}
                                                        width={115}
                                                        alt="" /></ProfileImage>
                                                </MediaBlock.Media>
                                                <MediaBlock.Body>
                                                    <MediaBlock.Body.Headline>Pattananusorn, Tanisorn</MediaBlock.Body.Headline>
                                                    <MediaBlock.Body.Description>WFE East - Support and Development</MediaBlock.Body.Description>
                                                    <LinkList size="small" icons>
                                                        <LinkList.Item icon={<LocationArrowIcon />}> Bangkok, Thailand </LinkList.Item>
                                                        <LinkList.Item icon={<ClockIcon />}> GMT-4</LinkList.Item>
                                                    </LinkList>
                                                </MediaBlock.Body>
                                            </MediaBlock>
                                        </Card.Body>
                                        <Card.Footer>
                                        </Card.Footer>
                                    </Card>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <footer className={styles.footer}>
                <Footer variant="condensed" className={styles.footer}>
                    <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
                </Footer>
            </footer>
            
        </div >

    </div >
}

export default Support;