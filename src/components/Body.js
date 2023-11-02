import RestaurantCard from "./RestaurantCard";


const Body = () => {
    return (
      <>
        <div className="body">
          <div className="search">Search</div>
          <div className="res-container">
          <RestaurantCard resName="Meghana foods" cuisine="Biryani, North Indian"/>
          <RestaurantCard resName="Yolkshire foods" cuisine="Multi cuisine, veg, non-veg"/>
          <RestaurantCard resName="Pizza hut" cuisine="Burgers, Pizza"/>
          <RestaurantCard resName="KFC" cuisine="Chicken, Burgers"/>
  
          </div>
        </div>
      </>
    );
  };
  export default Body