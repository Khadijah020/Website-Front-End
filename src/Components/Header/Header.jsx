import React from 'react'
import './Header.css'


const Header = () => {
    console.log("Hrader comp is rendered")
    return (

        <div className='header'>
            <div className='header-content'>
                <h2>Order your favourite food here!</h2>
                <p>Choose from a diverse menu featuring a delectable array od dishes crafted with the finest ingredients and culinary expertise. Our menu will satisfy your cravings and elevate your dining expeience, one delicious meal at a time</p>
                <button>View Menu</button>
            </div>

        </div>
    )
}

export default Header
