import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

// styles
import './component.scss'


const AppbarComponent = () => {
    
    return (
        <div className='appbar'>

            <div className='appbar__logo_container'>
                <img
                    src={'/images/logo.jpg'}
                    alt='Logo'
                    className='appbar__logo_image'
                    width={'40'}
                    height={'40'}
                />
                <p className='appbar__text appbar__title'>
                    An Era
                </p>
            </div>
            
            <p className='appbar__text appbar__bytext'>
                <Link href={'https://felixportfolio-ea3f1.web.app'} target='_blank' type='' style={{ textDecoration: 'none' }}>
                    <small>
                        By Felix (Efen)
                    </small>
                </Link>
            </p>
            
        </div>
    )
}

export default AppbarComponent
