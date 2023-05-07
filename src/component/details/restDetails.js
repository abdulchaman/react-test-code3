import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./details.css";
import Menu from "./menu";
const url = "http://3.17.216.66:4000/details";
const menuUrl ="http://3.17.216.66:4000/menu";
class RestDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            restData:'',
            menuData:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            menuItem:''
        }
    }
    updateCart=(data)=>{
        this.setState({menuItem:data})
        console.log(this.state.menuItem)
    }
    render(){
        let details = this.state.restData;
        return(
            <>
                <div className="details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="rest_de_img">
                                    <img src={details.restaurant_thumb}></img>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="details_content">
                                    <h2>{details.restaurant_name}</h2>
                                    <h3>Average rating: {details.average_rating}</h3>
                                    <h4>Rating text: {details.rating_text}</h4>
                                    <h5>Cost: {details.cost}</h5>
                                    <h6>Address: {details.address}</h6>
                                    <h6>Phone Number: {details.contact_number}</h6>
                                    <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link>&nbsp;
                                    <button className="btn btn-success">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Menu menuData={this.state.menuData} menuItem={(data)=>this.updateCart(data)}></Menu>
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restId = this.props.location.search.split("=")[1];
        let restResp = await axios.get(`${url}/${restId}`,{method:'GET'});
        let menuResp = await axios.get(`${menuUrl}/${restId}`,{method:'GET'})
        this.setState({restData:restResp.data[0],menuData:menuResp.data})
    }
}
export default RestDetails;