import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HorizontalHeader, DropdowMenu, Footer, Tile, Grid, CaretDownIcon } from '@exxonmobil/react-unity'
// import * as DropdowMenu from '@radix-ui/react-dropdown-menu'

import React, { Fragment, useEffect, useRef, useState } from 'react';

function Navbar() {
    const router=useRouter()
    const Metrics = ['Dashboards', 'Status'];
    return <div> 
        <a href="/">
            <div className={styles.header}>
               
                <HorizontalHeader href='/' title="Digital Procedures | One Stop Shop Portal" variant="condensed">
                    <HorizontalHeader.Nav className={styles.navlink}>
                        <Link href="/implementation" style={{fontWeight: router.pathname=='/implementation' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            Implementation
                        </Link>
                        <Link href="/documentation" style={{fontWeight: router.pathname=='/documentation' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            Tool Documentation
                        </Link>
                        <Link href="/faq" style={{fontWeight: router.pathname=='/faq' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            FAQ
                        </Link>
                        <Link href="/about" style={{fontWeight: router.pathname=='/about' ? '600' : '400', marginRight: 20, color: 'white', fontSize: 14}}>
                            Support
                        </Link>
                        {/* <DropdowMenu.Root>
                            <DropdowMenu.Trigger className={styles.dropdowntrigger}>Metrics</DropdowMenu.Trigger>
                            <DropdowMenu.Content className={styles.dropdown}>
                                <DropdowMenu.Item className={styles.dropdownitem}>
                                    <Link href="/dashboards" style={{fontWeight: router.pathname=='/dashboards' ? '600' : '400', margin: 15, color: 'white', fontSize: 14}}>
                                        Dashboards
                                    </Link>
                                </DropdowMenu.Item> 
                                <DropdowMenu.Item className={styles.dropdownitem}>
                                    <Link href="/status" style={{fontWeight: router.pathname=='/status' ? '600' : '400', margin: 15, color: 'white', fontSize: 14}}>
                                        Status
                                    </Link>
                                </DropdowMenu.Item> 
                            </DropdowMenu.Content>
                        </DropdowMenu.Root> */}
                        <HorizontalHeader.Nav.Dropdown text='Metrics'>
                            <Link href="/dashboards" style={{fontWeight: router.pathname=='/dashboards' ? '600' : '400', fontSize: 14}}>
                                Dashboards
                            </Link>
                            <div
                                class="em-c-primary-nav__subitem em-c-primary-nav__subitem-footer"
                            ></div>
                            <Link href="/status" style={{fontWeight: router.pathname=='/status' ? '600' : '400', fontSize: 14}}>
                                Status
                            </Link>
                        </HorizontalHeader.Nav.Dropdown>
                    </HorizontalHeader.Nav>
                </HorizontalHeader>
            
            </div>
        </a>
    </div >
}
export default Navbar;