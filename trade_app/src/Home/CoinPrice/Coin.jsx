import React from "react";
import './style.css';
const Coin = ({  name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange}) =>{
    return(
        <div className="pricechange">
            <span className="coin">{name} 
                <img src={image} alt="" width='20px' height='20px'/>
                    <span className="price">${price}</span>
                    {priceChange < 0 ?(
                     <span className="red">{priceChange.toFixed(2)}%</span>):
                     (<span className="blue">{priceChange.toFixed(2)}%</span>)
                    }
            </span>
        </div>
    );
}
export default Coin;