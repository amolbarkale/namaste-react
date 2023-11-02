
const styleCard = {
  backgroundColor: "yellow",
}
const RestaurantCard = ({resName, cuisine}) =>{
    return<>
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900"/>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>3.5 stars</h4>
      <h4>38 minutes</h4>
  
    </div>
    </>
  }
  export default RestaurantCard