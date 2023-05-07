import React,{Component} from "react";
class Menu extends Component{
    orderId=[]
    constructor(props){
        super(props)
    }
    placeOrder=(id)=>{
        this.orderId.push(id);
        this.props.menuItem(this.orderId);
    }
    removeOrder=(id)=>{
        if(id){
            this.orderId.splice(this.orderId.indexOf(id),1);
        }
        this.props.menuItem(this.orderId);
    }
    renderCart=(order)=>{
        if(order){
            return(
                order.map((item,index)=>{
                    return(
                        <>
                            <b key={index}>{item}</b>&nbsp;
                        </>
                    )
                })
            )
        }
    }
    renderMenu=({menuData})=>{
        if(menuData){
            return(
                menuData.map((item)=>{
                    return(
                        <>
                            <div className="menu_item" key={item.menu_id}>
                                <div className="row">
                                    <div className="col-lg-1">
                                        <span>{item.menu_id}</span>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="menu-img">
                                            <img src={item.menu_image}></img>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <h4>{item.menu_name}</h4>
                                    </div>
                                    <div className="col-lg-2">
                                        <h4>Rs. {item.menu_price}</h4>
                                    </div>
                                    <div className="col-lg-3">
                                        <button className="btn btn-success" onClick={()=>this.placeOrder(item.menu_id)}>+</button>&nbsp;
                                        <button className="btn btn-danger" onClick={()=>this.removeOrder(item.menu_id)}>-</button>
                                    </div>
                                </div>
                            </div>   
                        </>
                    )
                })
            )
        }
    }
    render(){
        return(
            <>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <center><h2>MENU</h2></center>
                            </div>
                            <div className="col-lg-12">
                                <h3>Menu Item Added {this.renderCart(this.orderId)}</h3>
                            </div>
                        </div>
                        {this.renderMenu(this.props)}
                    </div>
                </div>
            </>
        )
    }
}
export default Menu;