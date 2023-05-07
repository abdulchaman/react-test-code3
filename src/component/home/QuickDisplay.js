import React, {Component} from "react";
import {Link} from "react-router-dom";
const QuickDisplay =(props)=>{
    const renderMeal =({mealType})=>{
        if(mealType){
            return mealType.map((type)=>{
                return(
                    <>
                        <div className="col-lg-4" key={type._id}>
                            <Link to={`/listing/${type.mealtype_id}`}>
                                <div>
                                    <img src={type.meal_image} style={{width:"100%",height:"300px"}}></img>
                                </div>
                                <div>
                                    <h3>{type.mealtype}</h3>
                                    <p>{type.content}</p>
                                </div>
                            </Link>
                        </div>
                    </>
                )
            })
        }
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    {renderMeal(props)}
                </div>
            </div>
        </>
    )
}
export default QuickDisplay;