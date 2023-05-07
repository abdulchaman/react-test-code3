import React, {Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    render(){
        return(
            <header>
                <div id="brand">
                    <Link to="/">Developer Funnel</Link>
                </div>
                <div id="social">
                    <Link to="/login" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"></span> LogIn
                    </Link>&nbsp;
                    <Link to="/register" className="btn btn-info">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </div>
            </header>
        )
    }
}
export default Header;