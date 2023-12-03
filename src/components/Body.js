import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
  console.log('Body:')
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4129991&lng=78.4532568&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log('json:', json)
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
        <button className="search-btn" onClick={() => {
          console.log("searchText", searchText)
          let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredRestaurants(filteredRestaurants)
        }}>
            Search
          </button>
        <button className="top-rated" onClick={() => console.log("clicked")}>
            Top rated
          </button>
        </div>
        <div className="filter">
          <div className="res-container">
            {filteredRestaurants?.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
