import React,{useState,useEffect} from 'react'
import items from './data'

const RoomContext = React.createContext()
//Provider is responsible for allowing all the components in the component tree to access it

const RoomProvider = ({children}) => {
        const [rooms,setRooms] = useState([])
        const [sortedRooms, setSortedRooms] = useState([])
        const [featuredRooms,setFeaturedRooms] = useState([])
        const [loading, setLoading] = useState(true)

        //for filtering
        const [type, setType] = useState('all')
        const [capacity, setCapacity] = useState(0)
        const [price, setPrice] = useState(1000)
        const [minPrice, setminPrice] = useState(0)
        const [maxPrice, setmaxPrice] = useState(0)
        const [minSize, setminSize] = useState(0)
        const [maxSize, setmaxSize] = useState(0)
        const [breakfast, setBreakfast] = useState(false) 
        const [pets, setPets] = useState(false)

        //getData(external data)

        // useEffect(() => {
        //     filterRooms()
        // }, [type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets])
        
        //local data(on component did mount we set this up i.e featured rooms)
        useEffect(() => {
            let rooms = formatData(items)
            // console.log(rooms)
            let featuredRooms = rooms.filter(room => room.featured === true)

            //by default we do not want maxPrice and maxSize to be zero
            let maximumPrice = Math.max(...rooms.map(item => item.price))
            let maximumSize = Math.max(...rooms.map(item => item.size))

            setFeaturedRooms(featuredRooms)
            setRooms(rooms)
            setSortedRooms(rooms)
            setLoading(false)
            setmaxPrice(maximumPrice)
            setmaxSize(maximumSize)
        }, [])

        const formatData = (items) => {
            let tempItems = items.map(item =>{
                let id = item.sys.id
                let images = item.fields.images.map(image => image.fields.file.url)
                
                let room = {...item.fields,images,id}
                return room
            })
            return tempItems;
        }

        const getRoom = (slug) =>{
            let tempRooms = [...rooms]
            const room = tempRooms.find((room) =>{
                return room.slug===slug
            })
            return room     //room is an object
        }

        //handle functions which will be made availbale to the RoomsFilter component
        const handleChange = event => {
            // console.log(event.type)
            var target = event.target
            var value = target.type === 'checkbox' ? target.checked : target.value
            var name = event.target.name
            // console.log(type,name,value)
            switch(name){
                case 'type':
                    setType(value)
                    break
                case 'capacity':
                    setCapacity(value)
                    break
                case 'price':
                    setPrice(value)
                    break
                case 'minPrice':
                    setminPrice(value)
                    break
                case 'maxPrice':
                    setmaxPrice(value)
                    break
                case 'minSize':
                    setminSize(value)
                    break
                case 'maxSize':
                    setmaxSize(value)
                    break
                case 'breakfast':
                    setBreakfast(value)
                    break
                case 'pets':
                    setPets(value)
                    break

                default:
                    return
                }
        }

        useEffect(() => {
            const filterRooms = () =>{
                // console.log('filtered')
                //all the rooms
                let tempRooms = [...rooms];
                //transform values
                setCapacity(parseInt(capacity))
                setPrice(parseInt(price))

                //filter by type
                if(type!== 'all'){
                    tempRooms = tempRooms.filter(room => room.type===type)
                }

                //filter by capacity
                if(capacity !== 1){
                    tempRooms = tempRooms.filter(room => room.capacity>=capacity)
                }

                //filter by price
                tempRooms = tempRooms.filter(room => room.price <= price) 

                //filter by size
                tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

                //filter by breakfast and pets
                if(breakfast){
                    tempRooms = tempRooms.filter(room => room.breakfast === true)
                }
                if(pets){
                    tempRooms = tempRooms.filter(room => room.pets === true)
                }

                setSortedRooms(tempRooms)
            }
            filterRooms()
        }, [type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets,rooms])
        
        return (
            <RoomContext.Provider value={{
                rooms,
                sortedRooms,
                featuredRooms,
                loading,
                getRoom,
                handleChange,
                type,
                capacity,
                price,
                minPrice,
                maxPrice,
                minSize,
                maxSize,
                breakfast,
                pets
                }}>
                {children}
            </RoomContext.Provider>
        )
}
const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}

//actually a class based
//we need to set rooms data in state but in hooks :(  

