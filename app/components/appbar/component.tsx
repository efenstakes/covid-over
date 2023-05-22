import React from 'react'


import './component.scss'
import Link from 'next/link'

type AppbarComponentProps = {

}
const AppbarComponent = () => {
    return (
        <div className='appbar'>

            <p className='appbar__text appbar__title'>
                An Era
            </p>
            
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
