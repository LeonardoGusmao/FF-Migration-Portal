import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HorizontalHeader, DropdowMenu, Footer, Tile, Grid, CaretDownIcon } from '@exxonmobil/react-unity'
// import * as DropdowMenu from '@radix-ui/react-dropdown-menu'

import React, { Fragment, useEffect, useRef, useState } from 'react';

function Navbar() {
    const router=useRouter()
    return <div> 
            <div className={styles.header}>
                <HorizontalHeader href='/' title="Digital Procedures | One Stop Shop Portal" variant="condensed">
                    <HorizontalHeader.Nav className={styles.navlink}>
                        <Link href="/" style={{fontWeight: router.pathname=='/' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            Home
                        </Link>
                        <Link href="/implementation" style={{fontWeight: router.pathname=='/implementation' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            Implementation
                        </Link>
                        <Link href="/documentation" style={{fontWeight: router.pathname=='/documentation' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            Tool Documentation
                        </Link>
                        <Link href="/faq" style={{fontWeight: router.pathname=='/faq' ? '600' : '400', marginRight: 30, color: 'white', fontSize: 14}}>
                            FAQ
                        </Link>
                        <Link href="/support" style={{fontWeight: router.pathname=='/support' ? '600' : '400', marginRight: 20, color: 'white', fontSize: 14}}>
                            Support
                        </Link>
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
    </div >
}
export default Navbar;