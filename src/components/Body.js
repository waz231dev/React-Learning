import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

function filterData(searchText,restaurantList) {
    
    const filteredData = restaurantList.filter((restaurant) => {
        return restaurant.data.name.includes(searchText);
    })
    return filteredData;   
}
const Body = () => {
    const [searchText,setSearchText] = useState("")
    const [restaurants,setRestaurants] = useState(restaurantList);

    useEffect(() => {

    })
    return (
        <>
            <div className="search">
                <input
                type="text"
                className="search-box"
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                />
                <button 
                    type="submit" 
                    onClick={()=>{
                        const filteredData = filterData(searchText,restaurantList)
                        setRestaurants(filteredData);
                    }}>
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
                })}
                {/* <RestaurantCard {...restaurantList[0].data} />
                <RestaurantCard {...restaurantList[1].data} />
                <RestaurantCard {...restaurantList[2].data} />
                <RestaurantCard {...restaurantList[3].data} />
                <RestaurantCard {...restaurantList[4].data} />
                <RestaurantCard {...restaurantList[5].data} /> */}
            </div>
        </>
    );
}

export default Body;