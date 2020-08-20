import React,{useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'
//function for getting all the unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]      //because item['type'] and item['capacity'] makes it dynamic than item.type
}

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    // console.log(context)
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context
    
    //1 get unique types
    let types = getUnique(rooms,'type')

    // add all option also along with other options
    types = ['all', ...types]

    //map to jsx to display options
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })

    //2 get unique capacities
    let people = getUnique(rooms,'capacity')
    people = people.map((item,index) => {
        return <option value={item} key={index}>{item}</option> 
    })

    return (
        <section className="filter-container">
            <Title title="Search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form=control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* no. of guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form=control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* end of no. of guests */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">room price {price}/-</label>
                    <input className="form-control" type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange}/>
                </div>
                {/* end of price */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                    </div>
                </div>
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

export default RoomsFilter

//we need to deal with controlled inputs, we need to set states and onchange functions in context and use in this component