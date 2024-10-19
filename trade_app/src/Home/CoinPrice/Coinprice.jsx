import React,{useState,useEffect} from "react";
import axios from "axios";
import Coin from "./coin.jsx";
function Coinprice()
{
  const [coins,setCoin] = useState([]);
  const config = {
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-MRuMmieFVM7wvT47EpYiD6x9'}
  };
  
  useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
        ,config)
        .then(res => {
          setCoin(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
      }, []); 
      return(
        <div>
      {coins.map(coin => {
        return (  
          <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
         </div> 
      );
        
      

}
export default Coinprice;