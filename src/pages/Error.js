import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'

function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">
                        Back to home
                    </Link>
            </Banner>
        </Hero>
    )
}

export default Error
