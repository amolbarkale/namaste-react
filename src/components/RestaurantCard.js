import { CDN_IMG_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "yellow",
};
const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRatingString,
    sla,
  } = restaurant?.info;

  return (
    <>
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_IMG_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>Stars: {avgRatingString}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    </>
  );
};
export default RestaurantCard;
