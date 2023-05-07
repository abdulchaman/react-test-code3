import React,{Component} from "react";
import axios from "axios";
import ListingDisplay from "./listingDisplay";
import "./listing.css"
const url="http://3.17.216.66:4000/restaurant?mealtype_id=";
class ListingApi extends Component{
    constructor(props){
        super(props);
        this.state={
            restData:''
        }
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="filter">

                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ListingDisplay listData={this.state.restData}></ListingDisplay>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        try{
            let mealId = this.props.match.params.mealId;
            sessionStorage.setItem('mealId',mealId);
            let listResponse= await axios.get(`${url}${mealId}`,{method:"GET"})
            this.setState({restData:listResponse.data})
        }
        catch(error){
            console.log("error",error)
        }
    }
}
export default ListingApi;