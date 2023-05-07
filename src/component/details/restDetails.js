import React,{Component} from "react";
import axios from "axios";
import "./details.css";
const url = "http://3.17.216.66:4000/details";
class RestDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            restData:''
        }
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
                        </div>
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restId = this.props.location.search.split("=")[1];
        let restRespon = await axios.get(`${url}/${restId}`,{method:'GET'});
        this.setState({restData:restRespon.data[0]})
    }
}
export default RestDetails;