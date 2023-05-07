import React from "react";
import {Link} from "react-router-dom";
const ListingDisplay =(props)=>{
   
    const getMealType=(type)=>{
        switch(type){
            case "Lunch":
                return "label-primary";
                break;
            case "Breakfast":
                return "label-danger";
                break;
            default:
                return "label-default"
        }
    }
    const renderRest=({listData})=>{
        if(listData){
            return listData.map((item)=>{
                return(
                        <div key={item._id} className="listing_item">
                            <div className="ls_img">
                                <img src={item.restaurant_thumb}></img>
                            </div>
                            <div className="ls_cont">
                                <Link to={`/details?restId=${item.restaurant_id}`}><h2>{item.restaurant_name}</h2></Link>
                                <h3>{item.rating_text}</h3>
                                <h4>Average Rating: {item.average_rating}</h4>
                                <h4>Cost {item.cost}</h4>
                                {
                                    item.mealTypes.map((type)=>{
                                        return(
                                            <>
                                                <label className={`label ${getMealType(type.mealtype_name)}`} key={type.mealtype_id}>
                                                    {type.mealtype_name}
                                                </label>&nbsp;
                                            </>
                                        )
                                    })
                                }
                            </div>                          
                        </div>
                    )
                })
            }
        else{
            <h2>No data found</h2>
        }
    }
    return(
        <>
            {renderRest(props)}
        </>
    )

}
export default ListingDisplay;