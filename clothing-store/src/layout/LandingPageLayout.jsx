import React from 'react'
import './LandingPageLayout.css'

const LandingPageLayout = ({ children }) => {
    return (
        <>
            <div className='landingPageLayout'>{children}</div>
        </>
    )
}

export default LandingPageLayout