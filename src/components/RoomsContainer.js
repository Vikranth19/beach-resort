import React, { useContext } from 'react'
import { RoomContext } from '../context'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'

function RoomsContainer() {
    const value = useContext(RoomContext)
    let {loading, sortedRooms, rooms} = value
    // console.log(value)

    if(loading){
        return <Loading/>
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default RoomsContainer
//actually has used RoomConsumer for consuming context, but I'm using useContext
//also we can create a higher order component i.e create a withRoomConsumer in Context.js, watch at 3:45:00
// but I'm still sticking with useContext because it's very easy