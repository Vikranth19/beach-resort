import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

function Home() {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms are starting at 999/-">
                    <Link to="/rooms" className="btn-primary">
                        Our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </>
    )
}

export default Home
//Banner component is going to be children in Hero component