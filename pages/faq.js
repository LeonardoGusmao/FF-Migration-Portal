import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'


import { HorizontalHeader, Footer, Accordian, Tabs, PromoBlock } from '@exxonmobil/react-unity'

function FAQ() {
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
                <PromoBlock>
                    <PromoBlock.Title>FAQ</PromoBlock.Title>
                    <PromoBlock.Description>
                        Find relevant information for frequent asked questions.
                    </PromoBlock.Description>
                </PromoBlock>
                <Tabs>
                    <Tabs.Item title="Initial Steps" className={styles.tabspad}>
                        <Accordian expanded={[1, 2, 3, 4]}>
                            <Accordian.Item value={1} title="How can I request access to the application?">
                                By requesting for the addition of your LAN ID into the Digital Procedure LAN Group for the site. This request is raised through a ticket opened at <a style={{ color: 'blue' }} href="https://goto/itservices">goto/itservices</a> with the form LAN Active Directory Group Access.
                            </Accordian.Item>
                            <Accordian.Item value={2} title="What's next after having my access granted to the LAN Group?">
                                After having the access request completed, and your LAN ID added into the Digital Procedure LAN Group, to have your access properly set up as should, with the right permissions and functionalities enabled, your Site Admin or Focal Point for Digital Procedures application at your site are the right contacts to set up the applicable User Role configuration for you.
                            </Accordian.Item>
                            <Accordian.Item value={3} title="I can't log into my account, what should I do?">
                                Sometimes, navigation data from previous sessions may remain cached within the browser, so having it cleared periodically and the browser itself up to date are good options to consider. However, when that is not the case, opening a ticket to WFE Team through <a style={{ color: 'blue' }} href="https://goto/dpsupport">goto/dpsupport</a> link is the best solution to reach out the application support team for additional guidance.
                            </Accordian.Item>
                            <Accordian.Item value={4} title="How can I download the app on a mobile device?">
                                Locate the work tasks pro app in the App Store. The app has a purple and white icon. Download it and allow the camera and notifications on the device. More details on how to configure the app can be found <a style={{ color: 'blue' }} href="https://ishareteam3.na.xom.com/sites/chemgmo36/Digital%20Procedures/Shared%20Documents/Getting%20Logged%20In.pptx">here</a>.
                            </Accordian.Item>
                        </Accordian>
                    </Tabs.Item>
                </Tabs>
                <Tabs>
                    <Tabs.Item title="Creating a Procedure" className={styles.tabspad}>
                        <Accordian expanded={[1, 2, 3]}>
                            <Accordian.Item value={1} title="Is it possible to create a procedure with validation rules within steps?">Yes, indeed it is possible to select among some rule types to validate the execution inputs direclty while running a procedure instance, so, for instance, enabling with that planned bypassing actions to specific points within a procedure workflow depending on the results</Accordian.Item>
                            <Accordian.Item value={2} title="Sent a procedure for approval and found a mistake afterwards, what should I do?">You may request to recall the procedure in the Recall Procedure button available at the application dashboard.</Accordian.Item>
                            <Accordian.Item value={3} title="Can I add an image in a procedure to help the worker?">Yes, while creating a procedure, a Drawings tab is available for selection. To add an image, select the Add Drawing link at the top left of the screen, populate the Drawing Name and Description fields, upload the image (Must be an Image format ex: PDF, JPG, PNG, GIF).</Accordian.Item>
                        </Accordian>
                    </Tabs.Item>
                </Tabs>
                <Tabs>
                    <Tabs.Item title="Executing a Procedure" className={styles.tabspad}>
                        <Accordian expanded={[1, 2, 3]}>
                            <Accordian.Item value={1} title="Can I join a procedure that is already being executed?">Yes, in case, for instance, a procedure is too long or needs to be performed in various shifts, it is possible to save the initiaded execution and the recorded data, so a co-worker can complete the activity in the next shift as a procedure may require.</Accordian.Item>
                            <Accordian.Item value={2} title="Can I request a step deviation?">Yes. Open the procedure and task you wish to deviate. Select the Deviate Step button (Yellow balloon) from the task toolbar at the bottom of the window. The Deviate Task dialog box will display in front of the screen. Both fields, Supervisor and Comments, are mandatory. Use the Search For field to enter your search criteria. Tip: Search by first, not last name to locate your contact. Select the desired supervisor name by clicking inside the radio button, then click on the Select button in the lower right of the dialog box. You will be returned to the Deviate Task dialog box. Enter the deviation reason/explanation in the comment section then click on the checkmark at the bottom-right of the box to complete the deviation. The supervisor will then see this reason and decide to approve/reject the deviation. Confirm and the buttons should now be greyed out.</Accordian.Item>
                            <Accordian.Item value={3} title="How can I assign a procedure for execution on mobile version?">With the application opened, click on the hamburguer button and then on Search Procedure. Search for the procedure by using the criteria fields if needed. With the given search results select the intended procedure and press on Assign button. The execution instance should be within your inbox ready for action.</Accordian.Item>
                        </Accordian>
                    </Tabs.Item>
                </Tabs>
            </div>

            <footer className={styles.footer}>
                <Footer variant="condensed" className={styles.footer}>
                    <Footer.Link><a>Crafted by </a>Guardians</Footer.Link>
                </Footer>
            </footer>

        </div >

    </div>
}

export default FAQ;