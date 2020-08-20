import React, { useContext } from 'react'
import { RoomContext } from '../context' 
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

function FeaturedRooms() {
    const value = useContext(RoomContext)
    // console.log(value)

    //renaming featuredRooms coming from data via context as rooms
    let {loading,featuredRooms: rooms} = value
    // console.log(rooms)
    rooms = rooms.map(room =>{
        return <Room key={room.id} room={room}/>
    })
    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"/> 
            <div className="featured-rooms-center">
                {loading? <Loading/> : rooms}
            </div>
        </section>
    )
}

export default FeaturedRooms

//actually a class based