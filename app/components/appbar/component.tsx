import React from 'react'


import './component.scss'

type AppbarComponentProps = {

}
const AppbarComponent = () => {
    return (
        <div className='appbar'>

            <p className='appbar__text appbar__title'>
                An Era
            </p>
            
            <p className='appbar__text appbar__bytext'>
                <small>
                    By Felix (Efen)
                </small>
            </p>
            
        </div>
    )
}

export default AppbarComponent
