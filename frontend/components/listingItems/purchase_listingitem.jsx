import React from 'react';
import { withRouter } from 'react-router'

class ItemPurchaseButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        const {item, isCurrentUser, makePurchased} = this.props
        let info
        if (isCurrentUser){
            info = {
                sneaker_id: item.sneaker_id,
                size: item.size,
                price: item.price,
            }
            makePurchased(info).then(res => {
                this.props.history.push(`/purchased/${res.purchasedItem.id}`)
            })
        } else {
            this.props.history.push("/login")
        }
    }

    render(){
        return(
            <button onClick={this.handleClick} className="listing-show-footer-btns-purchase">Purcahse</button>
        )
    }
}

export default withRouter(ItemPurchaseButton);
  