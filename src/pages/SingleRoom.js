import React,{useContext,useState} from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

function SingleRoom({match}) {

    // console.log(match)
    const [slug,] = useState(match.params.slug)
    const [defaultImg,] = useState(defaultBcg)

    const {getRoom} = useContext(RoomContext) 
    const room = getRoom(slug)
    if(!room){
        return <div className="error">
            <h3>No such room could be found..</h3>
            <Link to="/rooms" className="btn-primary">
                Back to rooms
            </Link>
        </div>
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
    const [mainImg,...otherImgs] = images;
    return (
        <>
        <StyledHero img={mainImg || defaultImg}>
            <Banner title={`${name}`}>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {otherImgs.map((item,index) => {
                  return  <img src={item} key={index} alt={name}/>
                })}
            </div>
            <div className="single-room-info">
                <article className="description">
                    <h3>Details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Info</h3>
                    <h6>Price: {price}/-</h6>
                    <h6>Size: {size} sqft</h6>
                    <h6>max capacity: {capacity>1 ? `${capacity} people` : `${capacity} person`}</h6>
                    <h6>{pets? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast provided"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {extras.map((item,index) => {
                    return <li key={index}>-{item}</li>
                })}
            </ul>
        </section>
        </>
    )
}

export default SingleRoom
// our hero component needs to be dynamic i.e display that particular image, which is not possible manually but can be done with
// styled components