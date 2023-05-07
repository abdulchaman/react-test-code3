import React, {Component} from "react";
import QuickDisplay from "./QuickDisplay";
const url = "http://3.17.216.66:4000/quicksearch";

class QuickSearch extends Component{
    constructor(){
        super();
        this.state={
            mealData:''
        }
    }
     paraStyle={
        "fontSize":"25px"
    }
    render(){
        return(
            <>
                <div style={{marginTop:"40px"}}>
                <h2>QuickSearch</h2>
                <p style={this.paraStyle}>Find place according to meal type</p>
                <QuickDisplay mealType={this.state.mealData}></QuickDisplay>
                </div>
            </>
        )
    }
    async componentDidMount(){
        try{
            const mealResponse = await fetch(`${url}`,{method:"GET"}).then((res)=>res.json());
            this.setState({mealData:mealResponse})
        }
        catch(error){
            console.log("error",error)
        }
    }
}
export default QuickSearch;