import {Component} from "react";
import "./ProductCard.css";

class ProductCard extends Component {


    render(){


        let {productImg,groupName, price, priceMonth, title } = this.props.data;

        return <div className={`productCard py-3 px-1 ${this.props.dark}`}>
                <img className="d-block productImg" src={productImg} alt=""/>
                <a href="#" className="groupName d-block mb-2 mt-3">
                    {groupName}
                </a>
                <p className="price mb-2 ">{price} um</p>
                <p className="priceMonth">{priceMonth} / мес</p>
                <p className="title">{title}</p>
                <a href="#" className="btn" onClick={this.props.buy}>Buy</a>
            </div>
 }
}

export default ProductCard;