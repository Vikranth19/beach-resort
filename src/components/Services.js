import React,{useState} from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

function Services() {
 
    const [services,] = useState([
        {
            icon: <FaCocktail/>,
            title: "Free cocktails",
            info: 'We provide the best cocktails available and people definitely gonna enjoy them'
        },
        {
            icon: <FaHiking/>,
            title: "Endless hiking",
            info: 'Our hiking services are one of the best in town at very affordable prices'
        },
        {
            icon: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'We do provide shuttle services for our customers comfort'
        },
        {
            icon: <FaBeer/>,
            title: "Strongest Beer",
            info: 'We provide free beer for our customers which many people go crazy for'
        }
    ])

    return (
        <section className="services">
            <Title title="services"/>
             <div className="services-center">
                 {services.map((service,index) =>{
                     return <article key={index} className="service">
                         <span>{service.icon}</span>
                         <h6>{service.title}</h6>
                         <p>{service.info}</p>
                     </article>
                 })}
             </div>
        </section>
    )
}

export default Services
//we want to render this only in home page
//class based in video