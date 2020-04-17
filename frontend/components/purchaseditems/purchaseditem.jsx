import React from 'react';
import { Link } from 'react-router-dom';


class PurchasedItemShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getPurchased(this.props.purchaseId)
    }

    render(){
        const {purchaseditem} = this.props
        return(
            <div className="purchaseItem-showpage">
                <div className="purchaseItem-show-header">

                </div>
                <div className="purchaseItem-show-body">
                    <img src={purchaseditem.photoUrl} className="purchaseItem-show-img"/>
                    <span>{purchaseditem.sneakerName}</span>
                    <span>{purchaseditem.size}</span>
                    <span>{purchaseditem.order_number}</span>
                    <span>{purchaseditem.price}</span>
                    <Link to={`/users/${this.props.userId}`}>User Profile</Link>
                </div>
            </div>
        )
    }
}

export default PurchasedItemShow;