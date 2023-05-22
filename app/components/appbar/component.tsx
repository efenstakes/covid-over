import React from 'react'

import './component.scss'
import Link from 'next/link'
import Image from 'next/image'

type AppbarComponentProps = {

}
const AppbarComponent = () => {
    
    return (
        <div className='appbar'>

            <div className='appbar__logo_container'>
                <Image
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
                <Link href={'https://felixportfolio-ea3f1.web.app'} target='_blank'>
                    <small>
                        By Felix (Efen)
                    </small>
                </Link>
            </p>
            
        </div>
    )
}

export default AppbarComponent
