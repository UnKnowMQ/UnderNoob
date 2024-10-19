import React from 'react'
import './Menu.css'
const Menu = () => {
  return (
    <div class='Menu'>
      <ul>
        <li class='main1'>Personal Portfolio
            <ul class="sub1">
                <li>Today</li>
                <li>7 days</li>
                <li>1 month</li>
            </ul>
        </li>
        <li class='main2'> News
            <ul class='sub2'>
                <li>Stock</li>
                <li>Coin</li>
            </ul>
        </li>
        <li>Investment suggestions</li>
      </ul>
    </div>
  )
}

export default Menu
