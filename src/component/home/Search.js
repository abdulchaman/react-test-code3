import React, {Component} from "react";
let lUrl = "http://3.17.216.66:4000/location";
let restUrl = "http://3.17.216.66:4000/restaurant?stateId=";
class Search extends Component{
    constructor(){
        super();
        this.state={
            location:'',
            restData:''
        }
    }
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                        <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }
    handleCity=(event)=>{
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:"GET"})
        .then((res)=>res.json())
        .then((data)=>{this.setState({restData:data})})
        
    }
    renderRest=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}</option>
                )
            })
        }
    }
    render(){
        return(
            <>
                <div className="container" style={{marginTop:"40px"}}>
                    <div className="row">
                        <div className="col-lg-4">
                            <select style={{width:"100%"}} onChange={this.handleCity}>
                                <option>Select Location</option>
                                {this.renderCity(this.state.location)}
                            </select>
                        </div>
                        <div className="col-lg-4">
                            <select style={{width:"100%"}}>
                                <option>
                                    Select Restaurant
                                </option>
                                {this.renderRest(this.state.restData)}
                            </select>
                        </div>   
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount(){
        try{
            const locResponse = await fetch(`${lUrl}`, {method:"GET"}).then((res)=>res.json());
            this.setState({location:locResponse})
        }
        catch(error){
            console.log("error",error)
        }
    }

}
export default Search;