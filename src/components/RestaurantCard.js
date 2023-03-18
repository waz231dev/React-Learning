import { imgUrl } from "../config";
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    avgRating
  }) =>{
      
    return (
        <div className="card">
            <img src={imgUrl+cloudinaryImageId} alt="rest-img" />
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
        </div>
    )
}
export default RestaurantCard;