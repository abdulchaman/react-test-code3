import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from './Footer';
import Header from "./Header";
import Home from './component/home/Home';
import ListingApi from './component/listing/listingApi';
import RestDetails from "./component/details/restDetails";

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header></Header>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={ListingApi}></Route>
            <Route path="/details" component={RestDetails}></Route>
            <Footer></Footer>
        </BrowserRouter>
    )
}
export default Routing;