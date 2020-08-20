import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import RoomsContainer from '../components/RoomsContainer'

function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    Back to home
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}

export default Rooms
